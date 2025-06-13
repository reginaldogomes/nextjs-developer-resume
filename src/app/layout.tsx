'use client'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Main from '@/components/layout/Main'
import FloatingButton from '@/components/FloatingButton'
import { usePathname } from 'next/navigation'

import { sourceCodePro } from './fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="pt-BR" className={`${sourceCodePro.variable}`}>
      <body className="font-mono dark bg-surface">
        <Header />
        <Main>{children}</Main>
        <Footer />
        {pathname !== '/' && <FloatingButton />}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
