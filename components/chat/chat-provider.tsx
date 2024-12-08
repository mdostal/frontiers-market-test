"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { ref, onValue, push, serverTimestamp } from 'firebase/database'
import { database } from '@/lib/firebase'
import { getUserId } from '@/lib/chat-utils'
import { ChatWidget } from './chat-widget'

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
  const userId = getUserId()

  useEffect(() => {
    const messagesRef = ref(database, `chats/${userId}/messages`)
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
  }, [userId])

  const sendMessage = async (text: string) => {
    // we could extract this further, but it is just used in one place
    await fetch('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: text,
        user: userId
      }),
    })
  }

  const toggleChat = () => setIsOpen(prev => !prev)

  return (
    <ChatContext.Provider value={{ messages, sendMessage, isOpen, toggleChat }}>
      {children}
      <ChatWidget isOpen={isOpen} toggleChat={toggleChat} />
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