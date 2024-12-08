"use client"

import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { ref, onValue, push } from 'firebase/database'
import { database } from '@/lib/firebase'
import { getUserId } from '@/lib/utils/auth-utils'
import { ChatWidget } from './chat-widget'
import { toast } from "sonner"
import { useAuthStore } from '@/lib/store/auth-store'
import { NextResponse } from 'next/server'
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
import { migrateMessages, sendMessage } from '@/lib/chat'

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const guestId = useAuthStore((state) => state.guestId); 
  const [messages, setMessages] = useState<Message[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const currentUserId = getUserId()
  const previousUserIdRef = useRef<string>(currentUserId)

  const checkSendMessageReturn = async(text: string) => {
    try {
      const response = await sendMessage(text, currentUserId);
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

  const checkMigrateReturn =  async (previousUserId: string) => {
    try{
      const response = await migrateMessages(previousUserId, currentUserId);
      if (!response.ok) 
        toast.error('There was an error migrating messages, but you may still be able to chat. Logout to see old guest account messages or reload to attempt again.', {
          dismissible: true,
        })
      return response
    } catch (error) {
      console.log(error)
      toast.error('There was a problem calling to the server', {
        dismissible: true,
      })
    }
  }
   
  useEffect( () => {
    const messagesRef = ref(database, `chats/${currentUserId}/messages`)
    // If user ID changed, migrate messages from previous ID
    if (previousUserIdRef.current !== currentUserId && previousUserIdRef.current === guestId) {
      checkMigrateReturn(previousUserIdRef.current);
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

  const toggleChat = () => setIsOpen(prev => !prev)

  return (
    <ChatContext.Provider value={{ messages, sendMessage: checkSendMessageReturn, isOpen, toggleChat }}>
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