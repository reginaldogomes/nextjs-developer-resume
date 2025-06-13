'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PageHead from '@/components/layout/PageHead'
import Main from '@/components/layout/Main'
import { Badge } from '@/components/ui/badge'
import { FaUser, FaBullseye, FaBriefcase, FaTools } from 'react-icons/fa'

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
  tecnologias: [
    { name: 'React', destaque: true },
    { name: 'Next.js', destaque: true },
    { name: 'TypeScript', destaque: true },
    { name: 'Tailwind CSS', destaque: true },
    { name: 'Shadcn UI', destaque: true },
    { name: 'Node.js', destaque: false },
    { name: 'MongoDB', destaque: false },
    { name: 'Git', destaque: false },
    { name: 'Figma', destaque: false },
    { name: 'Vercel', destaque: false },
  ],
}

const sections = [
  {
    title: 'Resumo Profissional',
    content: userData.resumo,
    icon: <FaUser className="text-primary" />,
  },
  {
    title: 'Objetivo Profissional',
    content: userData.objetivo,
    icon: <FaBullseye className="text-primary" />,
  },
  {
    title: 'Experiência Profissional',
    content: userData.experiencia,
    icon: <FaBriefcase className="text-primary" />,
  },
]

const Page = () => (
  <Main>
    <section className="w-full max-w-5xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Curriculo
        </h1>
        <p className="text-muted-foreground text-lg mt-2">
          Conheça meu perfil profissional
        </p>
      </div>

      <div className="space-y-8">
        {sections.map(({ title, content, icon }, index) => (
          <motion.div
            key={title}
            className="bg-muted/5 border border-border p-6 rounded-xl shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              {icon}
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            </div>
            {Array.isArray(content) ? (
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                {content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-sm">{content}</p>
            )}
          </motion.div>
        ))}

        {/* Nuvem de Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-muted/5 border border-border p-6 rounded-xl shadow"
        >
          <div className="flex items-center gap-3 mb-2">
            <FaTools className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Tecnologias Dominadas
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {userData.tecnologias.map((tech) => (
              <Badge
                key={tech.name}
                variant={tech.destaque ? 'default' : 'outline'}
                className={`text-sm px-3 py-1 ${
                  tech.destaque
                    ? 'bg-primary text-background'
                    : 'text-muted-foreground border-muted'
                }`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Main>
)

export default Page
