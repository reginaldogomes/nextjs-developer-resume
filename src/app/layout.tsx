import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'
import './globals.css'
import { Lexend } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Main } from '@/components/layout/Main'
import FloatingButton from '@/components/FloatingButton'

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
      <body className={`${lexend.className} dark`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <FloatingButton />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
