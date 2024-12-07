import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { useStore } from '../store/useStore';

interface Message {
  id?: string;
  text: string;
  isUser: boolean;
  timestamp: any;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const { user } = useStore();

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, `chats/${user.id}/messages`),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages: Message[] = [];
      snapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !user) return;

    try {
      await addDoc(collection(db, `chats/${user.id}/messages`), {
        text: inputText,
        isUser: true,
        timestamp: serverTimestamp(),
      });

      setInputText('');

      // Simulate AI response
      setTimeout(async () => {
        await addDoc(collection(db, `chats/${user.id}/messages`), {
          text: "Thanks for your message! Our team will get back to you soon.",
          isUser: false,
          timestamp: serverTimestamp(),
        });
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
          <div className="p-4 bg-primary-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">
              Chat Support {user?.isGuest ? '(Guest)' : ''}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.isUser ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};