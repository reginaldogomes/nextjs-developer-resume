import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'
import './globals.css'
import { Lexend } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Main } from '@/components/layout/Main'
import FloatingButton from '@/components/FloatingButton'
import { DefaultSeo } from 'next-seo'
import defaultSEOConfig from '../../next-seo.config'

export const metadata: Metadata = {
  title: 'Reginaldo Gomes - Analista Desenvolvedor Front-end',
  description:
    'Conheça Reginaldo Gomes, um analista desenvolvedor front-end especializado em criar soluções digitais eficientes e escaláveis. Com experiência em JavaScript, TypeScript e frameworks modernos como React e Next.js, ele oferece expertise em desenvolvimento web, arquitetura limpa e boas práticas de programação.',
}

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lexend.className} bg-background dark`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <FloatingButton />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
