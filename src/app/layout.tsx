'use client'
import GoogleAnalytics from '@/components/GoogleAnalytics'
// import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProfileProvider } from '@/context/resumeContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>{/* Script do Google Analytics */}</head>
      <body className="flex-col antialiased">
        <ProfileProvider>
          <Header />
          {children}
          <Footer />
        </ProfileProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
