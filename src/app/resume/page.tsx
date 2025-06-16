'use client'

import { motion } from 'framer-motion'
import {
  FaUser,
  FaBullseye,
  FaBriefcase,
  FaTools,
  FaGraduationCap,
} from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import PageHead from '@/components/layout/PageHead'

const PageHeadData = {
  title: 'Currículo',
  description:
    'Explore minha trajetória profissional em tecnologia e inovação.',
}

const userData = {
  resumo:
    'Desenvolvedor Web com foco em front-end, especializado em React e criação de interfaces modernas, responsivas e performáticas.\n\nExperiência sólida em desenvolvimento de aplicações com React, Next.js, TypeScript e Vite, seguindo boas práticas de UX/UI, acessibilidade, SEO técnico e testes de interface. Atua com integração de APIs REST/GraphQL, versionamento com Git e deploy automatizado (Vercel, GitHub Actions, Azure).\n\nPossui visão voltada à experiência do usuário e qualidade de entrega, contribuindo com soluções escaláveis e alinhadas aos objetivos de negócio.',
  objetivo:
    'Atuar em projetos desafiadores que contribuam para meu desenvolvimento técnico e estratégico, com foco em front-end e soluções em nuvem.\n\nBusco oportunidades que promovam evolução contínua e permitam assumir responsabilidades crescentes, incluindo a liderança técnica de times e projetos de alta relevância.',
  experiencia: [
    'Analista Desenvolvedor Front-end - BH Solutions (2023 - 2025)',
    'Analista Desenvolvedor Front-end - Locaweb (2022 - 2023)',
    'Analista Desenvolvedor Web - Cozinhas Itatiaia (2021 - 2022)',
    'Web Designer - Softplan (2021 - 2022)',
  ],
  educacao:
    'Curso Superior de Tecnologia (CST)\nGestão da Tecnologia da Informação\nUniCesumar - 2024 / 2026',
}

const sections = [
  {
    title: 'Resumo',
    content: userData.resumo,
    icon: <FaUser className="text-primary" />,
  },
  {
    title: 'Objetivo',
    content: userData.objetivo,
    icon: <FaBullseye className="text-primary" />,
  },
  {
    title: 'Experiência',
    content: userData.experiencia,
    icon: <FaBriefcase className="text-primary" />,
  },
  {
    title: 'Educação',
    content: userData.educacao,
    icon: <FaGraduationCap className="text-primary" />,
  },
]

const techStacks: Record<
  'design' | 'frontend' | 'backend' | 'cloud',
  { name: string; nivel: number }[]
> = {
  design: [
    { name: 'Figma', nivel: 5 },
    { name: 'UX/UI', nivel: 5 },
    { name: 'CSS', nivel: 5 },
    { name: 'HTML', nivel: 5 },
  ],
  frontend: [
    { name: 'React', nivel: 5 },
    { name: 'Next.js', nivel: 5 },
    { name: 'JavaScript', nivel: 5 },
    { name: 'TypeScript', nivel: 5 },
    { name: 'Tailwind CSS', nivel: 4 },
    { name: 'Shadcn UI', nivel: 4 },
  ],
  backend: [
    { name: 'Node.js', nivel: 4 },
    { name: 'Nest.js', nivel: 2 },
    { name: 'PostgreSQL', nivel: 3 },
    { name: 'Prisma', nivel: 3 },
    { name: 'API', nivel: 5 },
  ],
  cloud: [
    { name: 'Git', nivel: 5 },
    { name: 'Azure', nivel: 5 },
    { name: 'CI/CD', nivel: 4 },
    { name: 'Docker', nivel: 3 },
    { name: 'AWS', nivel: 4 },
  ],
}

const Page = () => (
  <section className="w-full max-w-5xl mx-auto px-4 py-16 space-y-12">
    <PageHead
      title={PageHeadData.title}
      description={PageHeadData.description}
    />

    <div className="space-y-8">
      {sections.map(({ title, content, icon }, index) => (
        <motion.div
          key={title}
          className="bg-card border border-border p-6 rounded-xl shadow"
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
            <p className="text-muted leading-relaxed whitespace-pre-line text-justify">
              {content}
            </p>
          )}
        </motion.div>
      ))}

      {/* Tecnologias Dominadas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-card border border-border p-6 rounded-xl shadow"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaTools className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">
            Tecnologias Dominadas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStacks).map(([categoria, tecnologias]) => {
            const tituloCategoria: Record<string, string> = {
              design: '🎨 Design',
              frontend: '⚛️ Front-end',
              backend: '🧩 Back-end',
              cloud: '☁️ Cloud & DevOps',
            }

            return (
              <div key={categoria}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  {tituloCategoria[categoria]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tecnologias.map((tech) => {
                    const bgOpacity = 0.3 + tech.nivel * 0.14 // varia entre ~0.44 e ~1.0
                    return (
                      <Badge
                        key={tech.name}
                        variant="default"
                        style={{
                          opacity: 0.4 + tech.nivel * 0.12, // Varia entre ~0.64 e 1.0
                        }}
                        className="text-sm px-3 py-1 bg-accent text-white font-medium"
                      >
                        {tech.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Page
