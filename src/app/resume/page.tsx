'use client'

import { motion } from 'framer-motion'
import { FaUser, FaBullseye, FaBriefcase, FaTools } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import PageHead from '@/components/layout/PageHead'
import Main from '@/components/layout/Main'

const userData = {
  nome: 'Currículo',
  cargo: 'Conheça meu perfil profissional',
  resumo:
    'Desenvolvedor front-end com experiência na construção de interfaces modernas, acessíveis e com alto desempenho. Utilizo tecnologias como React, Next.js e TypeScript para desenvolver aplicações escaláveis, integradas a serviços de nuvem. Atuo com soluções Microsoft Azure, incluindo App Services, Static Web Apps e pipelines de CI/CD com Azure DevOps. Foco na entrega de soluções digitais seguras, otimizadas e alinhadas às boas práticas de desenvolvimento em cloud.',
  objetivo:
    'Atuar em projetos desafiadores que contribuam para meu desenvolvimento técnico e estratégico, com foco em front-end e soluções em nuvem. Busco oportunidades que promovam evolução contínua e permitam assumir responsabilidades crescentes, incluindo a liderança técnica de times e projetos de alta relevância.',
  experiencia: [
    'Analista Desenvolvedor Front-end - BH Solutions (2023 - Atual)',
    'Analista Desenvolvedor Front-end - Locaweb (2022 - 2023)',
    'Analista Desenvolvedor Web - Itatiaia (2021 - 2022)',
  ],
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
]

const techStacks: Record<
  'design' | 'frontend' | 'backend' | 'cloud',
  { name: string; destaque?: boolean }[]
> = {
  design: [{ name: 'Figma' }, { name: 'Shadcn UI' }],
  frontend: [
    { name: 'React', destaque: true },
    { name: 'Next.js', destaque: true },
    { name: 'TypeScript', destaque: true },
    { name: 'Tailwind CSS', destaque: true },
  ],
  backend: [{ name: 'Node.js' }, { name: 'Nest.js' }, { name: 'PostgreSQL' }],
  cloud: [{ name: 'Git' }, { name: 'Azure' }, { name: 'Vercel' }],
}

const Page = () => (
  <section className="w-full max-w-5xl mx-auto px-4 py-16 space-y-12">
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-primary">
        {userData.nome}
      </h1>
      <p className="text-muted-foreground text-lg mt-2">{userData.cargo}</p>
    </div>

    <div className="space-y-8">
      {sections.map(({ title, content, icon }, index) => (
        <motion.div
          key={title}
          className="bg-white border border-border p-6 rounded-xl shadow"
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

      {/* Tecnologias Dominadas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white border border-border p-6 rounded-xl shadow"
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
                  {tecnologias.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant={tech.destaque ? 'default' : 'outline'}
                      className={`text-sm px-3 py-1 ${
                        tech.destaque
                          ? ''
                          : 'border-muted-foreground text-muted-foreground'
                      }`}
                    >
                      {tech.name}
                    </Badge>
                  ))}
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
