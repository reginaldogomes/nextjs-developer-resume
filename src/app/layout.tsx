import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import { Header } from '@/components/template/Header'
import { Footer } from '@/components/template/Footer'
import { Main } from '@/components/Main'
import { ProfileProvider } from '@/context/resumeContext'

export const metadata: Metadata = {
  title: 'Reginaldo Gomes - Analista Desenvolvedor Front-end',
  description:
    'Conheça Reginaldo Gomes, um analista desenvolvedor front-end especializado em criar soluções digitais eficientes e escaláveis. Com experiência em JavaScript, TypeScript e frameworks modernos como React e Next.js, ele oferece expertise em desenvolvimento web, arquitetura limpa e boas práticas de programação.',
}

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={nunito.className}>
      <body className="flex-col">
        <ProfileProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ProfileProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
