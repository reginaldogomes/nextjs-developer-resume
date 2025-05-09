'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PageHead from '@/components/layout/PageHead'
import { Main } from '@/components/layout/Main'
import { CustomLink } from '@/components/Link'

const userData = {
  nome: 'Reginaldo Gomes',
  cargo: 'Desenvolvedor Front-end',
  resumo:
    'Desenvolvedor apaixonado por tecnologia, com experiência em aplicações modernas e responsivas.',
  objetivo:
    'Busco desafios que me permitam evoluir e contribuir com soluções eficientes.',
  experiencia: [
    'Analista Desenvolvedor Front-end - BH Solutions (2023 - Atual)',
    'Analista Desenvolvedor Front-end - Locaweb (2022 - 2023)',
    'Analista Desenvolvedor Web - Itatiaia (2021 - 2022)',
  ],
  competencias: [
    '🚀 React & Next.js',
    '🎨 Tailwind CSS & Shadcn UI',
    '⚙️ Git & CI/CD',
    '📦 Node.js & MongoDB',
  ],
}

const sections = [
  { title: 'Resumo Profissional', content: userData.resumo },
  { title: 'Objetivo Profissional', content: userData.objetivo },
  { title: 'Experiência Profissional', content: userData.experiencia },
  { title: 'Competências Técnicas', content: userData.competencias },
]

const Page = () => (
  <Main>
    <PageHead
      title="Currículo"
      description="Confira minhas habilidades e experiências profissionais."
    />

    <div className="min-h-screen flex items-center justify-center bg-transparent px-4 py-10 sm:px-6">
      <motion.div
        className="w-full max-w-3xl p-8 shadow-xl rounded-lg backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Cabeçalho */}
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl font-bold text-gray-100">
            {userData.nome}
          </CardTitle>
          <p className="text-gray-500 text-lg">{userData.cargo}</p>
        </CardHeader>

        {/* Conteúdo */}
        <CardContent className="space-y-6">
          {sections.map(({ title, content }, index) => (
            <motion.section
              key={title}
              className="p-6 rounded-lg shadow-md bg-gray-800 text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              {Array.isArray(content) ? (
                <ul className="mt-2 space-y-2">
                  {content.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{content}</p>
              )}
            </motion.section>
          ))}
        </CardContent>

        {/* Botão de Ação */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* <Button className="bg-gray-800 text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all">
            Baixar Currículo
          </Button> */}
          <CustomLink href="/dashboard" style="background">
            Baixar Currículo
          </CustomLink>
        </motion.div>
      </motion.div>
    </div>
  </Main>
)

export default Page
