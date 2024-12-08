"use client"

import { useEffect, useRef } from 'react'
import { useChat } from '@/components/chat/chat-provider'
import { getUserId } from '@/lib/chat-utils'

export function ChatMessages() {
  const { messages } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const userId = getUserId()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${!message.isAi ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              !message.isAi
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}