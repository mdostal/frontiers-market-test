"use client"

import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useChat } from './chat-provider'
import { ChatMessages } from './chat-messages'
import { ChatInput } from './chat-input'
import { useUser, SignInButton } from '@clerk/nextjs'

export function ChatWidget() {
  const { isOpen, toggleChat } = useChat()
  const { isSignedIn } = useUser()

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
        {isSignedIn && (
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">Switch Account</Button>
          </SignInButton>
        )}
        <Button variant="ghost" size="icon" onClick={toggleChat}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ChatMessages />
      <ChatInput />
    </div>
  )
}