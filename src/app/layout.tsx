'use client'
import { GoogleTagManager } from '@/components/GoogleTagManager'

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/FloatingButton'
import { usePathname } from 'next/navigation'

import { inter, sourceCodePro } from './fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${sourceCodePro.variable}`}
    >
      <body className="font-sans bg-background text-foreground transition-colors duration-300">
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
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  )
}
