"use client"

import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { ref, onValue, push } from 'firebase/database'
import { database } from '@/lib/firebase'
import { getUserId } from '@/lib/utils/auth-utils'
import { ChatWidget } from './chat-widget'
import { toast } from "sonner"
import { useAuthStore } from '@/lib/store/auth-store'

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
  const guestId = useAuthStore((state) => state.guestId); 
  const [messages, setMessages] = useState<Message[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const currentUserId = getUserId()
  const previousUserIdRef = useRef<string>(currentUserId)

   const migrateMessages =  async (previousUserId: string, currentUserId: string) => {
    const response = await fetch('/api/migrate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromUser: previousUserId,
        toUser: currentUserId
      }),
    })
    if (!response.ok) 
      toast.error('There was an error migrating messages, but you may still be able to chat. Logout to see old guest account messages or reload to attempt again.', {
        dismissible: true,
      })
    return response
  }
  useEffect( () => {
    const messagesRef = ref(database, `chats/${currentUserId}/messages`)
    // If user ID changed, migrate messages from previous ID
    if (previousUserIdRef.current !== currentUserId && previousUserIdRef.current === guestId) {
      migrateMessages(previousUserIdRef.current, currentUserId);
    }
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const messageList = Object.entries(data).map(([id, message]: [string, any]) => ({
          id,
          ...message,
        }))
        setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp))
      } else {
        setMessages([])
      }
    })

    previousUserIdRef.current = currentUserId
    return () => unsubscribe()
  }, [currentUserId])

  const sendMessage = async (text: string) => {
    try {
      const response =await fetch('/api/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: text,
          user: currentUserId
        }),
      })
      if (!response.ok) {
        toast.error('There was an error sending your message. Please try again later.', {
          dismissible: true,
        })

      }
    } catch (error) {
      console.log(error)
      toast.error('There was an error reaching the server. Please try again later.',{
        dismissible: true,
      })
    }
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