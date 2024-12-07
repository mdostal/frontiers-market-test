"use client"

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useChat } from './chat-provider'
import { SignInButton } from '@clerk/nextjs'

export function ChatWidget() {
  const [input, setInput] = useState('')
  const { messages, sendMessage, isOpen, toggleChat } = useChat()
  const { user, isSignedIn } = useUser()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    await sendMessage(input)
    setInput('')
  }

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-green-600 hover:bg-green-700 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Chat Support</h3>
        <Button variant="ghost" size="icon" onClick={toggleChat}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!isSignedIn ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Please sign in to start chatting</p>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isAi ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isAi
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-green-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>

      {isSignedIn && (
        <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  )
}