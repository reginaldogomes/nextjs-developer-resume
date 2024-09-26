'use client'
import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview, GA_TRACKING_ID } from '@/lib/analitycs'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (GA_TRACKING_ID) {
      const url = `${pathname}${searchParams.toString()}`
      pageview(url) // Envia o pageview ao GA sempre que a rota mudar
    }
  }, [pathname, searchParams])
  return (
    <html lang="en">
      <head>
        {/* Script do Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="flex-col antialiased">
        <ProfileProvider>
          <Header />
          {children}
          <Footer />
        </ProfileProvider>
      </body>
    </html>
  )
}
