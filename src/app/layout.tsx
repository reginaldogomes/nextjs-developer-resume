import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Main from '@/components/layout/Main'
import FloatingButton from '@/components/FloatingButton'

import { sourceCodePro } from './fonts'

export const metadata: Metadata = {
  title: 'Reginaldo Gomes - Analista Desenvolvedor Front-end',
  description:
    'Conheça Reginaldo Gomes, um analista desenvolvedor front-end especializado em criar soluções digitais eficientes e escaláveis. Com experiência em JavaScript, TypeScript e frameworks modernos como React e Next.js, ele oferece expertise em desenvolvimento web, arquitetura limpa e boas práticas de programação.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sourceCodePro.variable}`}>
      <body className="font-mono dark bg-surface">
        <Header />
        <Main>{children}</Main>
        <Footer />
        <FloatingButton />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
