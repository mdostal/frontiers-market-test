"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useChat } from '@/components/chat/chat-provider'

export function ChatInput() {
  const [input, setInput] = useState('')
  const { sendMessage } = useChat()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    await sendMessage(input)
    setInput('')
  }

  return (
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
  )
}