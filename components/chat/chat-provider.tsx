"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { ref, onValue, push, serverTimestamp } from 'firebase/database'
import { database } from '@/lib/firebase'
import {ChatWidget} from './chat-widget'

type Message = {
  id: string
  text: string
  sender: string
  timestamp: number
  isAi: boolean
}

type ChatContextType = {
  messages: Message[]
  sendMessage: (text: string) => Promise<void>
  isOpen: boolean
  toggleChat: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (!user) return

    const messagesRef = ref(database, `chats/${user.id}/messages`)
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const messageList = Object.entries(data).map(([id, message]: [string, any]) => ({
          id,
          ...message,
        }))
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp))
      }
    })

    return () => unsubscribe()
  }, [user])

  const sendMessage = async (text: string) => {
    if (!user) return

    const messagesRef = ref(database, `chats/${user.id}/messages`)
    await push(messagesRef, {
      text,
      sender: user.id,
      timestamp: serverTimestamp(),
      isAi: false,
    })

    // Simulate AI response
    setTimeout(async () => {
      await push(messagesRef, {
        text: "Thanks for your message! Our AI assistant will get back to you soon.",
        sender: 'ai',
        timestamp: serverTimestamp(),
        isAi: true,
      })
    }, 1000)
  }

  const toggleChat = () => setIsOpen(prev => !prev)

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isOpen, toggleChat }}>
      {children}
      <ChatWidget />
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}