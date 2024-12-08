import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ChatProvider } from '@/components/chat/chat-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AuthProvider } from '@/components/providers/auth-provider'
import { Toaster } from "@/components/ui/sonner"
import { SideMenu } from '@/components/home/side-menu'
import { NotificationBanner } from '@/components/home/notification-banner'
import { SpeedInsights } from "@vercel/speed-insights/next"
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
            <div className="text-black">
              <div className="bg-[#FBFAFA] relative min-h-[100dvh] flex w-full flex-col">
                <AuthProvider>
                  <ChatProvider>
                    <NotificationBanner />
                    <div className="bg-[#FBFAFA] relative min-h-[100dvh] flex w-full flex-col">
                      <Header />
                      <SideMenu />
                      <main className='flex-grow flex justify-center pt-2'>
                        <main className='flex flex-col gap-8 md:gap-16 lg:gap-20'>{children}</main>
                      </main>
                    </div>
                  </ChatProvider>
                </AuthProvider>
                <Footer />
                <Toaster />
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}