'use client'

import { motion } from 'framer-motion'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import PageHead from '@/components/layout/PageHead'
import Main from '@/components/layout/Main'
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

    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <motion.div
        className="w-full bg-surface border border-border text-foreground p-10 rounded-2xl shadow-xl space-y-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Conteúdo */}
        <CardContent className="space-y-8">
          {sections.map(({ title, content }, index) => (
            <motion.section
              key={title}
              className="bg-muted/5 border border-border p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {title}
              </h2>
              {Array.isArray(content) ? (
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {content.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">{content}</p>
              )}
            </motion.section>
          ))}
        </CardContent>

        {/* Botão de Ação */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        ></motion.div>
      </motion.div>
    </div>
  </Main>
)

export default Page
