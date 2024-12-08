import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ChatProvider } from '@/components/chat/chat-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AuthProvider } from '@/components/providers/auth-provider'
import { Toaster } from "@/components/ui/sonner"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <ChatProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </ChatProvider>
            </AuthProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}