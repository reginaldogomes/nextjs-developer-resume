'use client'
import { GoogleTagManager } from '@/components/GoogleTagManager'

import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Main from '@/components/layout/Main'
import FloatingButton from '@/components/FloatingButton'
import { usePathname } from 'next/navigation'

import { sourceCodePro } from './fonts'
import ThemeToggle from '@/components/ThemeToggle'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="pt-BR" className={`${sourceCodePro.variable}`}>
      <body className="font-mono bg-surface">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N78BQVKX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <GoogleTagManager gtmId="GTM-N78BQVKX" />
        <Header />
        <Main>
          {children}
          <ThemeToggle />
        </Main>
        <Footer />
        {pathname !== '/' && <FloatingButton />}
      </body>
    </html>
  )
}
