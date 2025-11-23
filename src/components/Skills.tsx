'use client'

import {
  FaGithub,
  FaReact,
  FaNode,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaLayerGroup,
  FaMagic,
  FaDocker,
  FaServer,
} from 'react-icons/fa'

import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from 'react-icons/ri'

import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoMongodb,
} from 'react-icons/bi'
import {
  SiExpress,
  SiReactquery,
  SiZod,
  SiNestjs,
  SiPrisma,
} from 'react-icons/si'

import skillsData from '@/data/skills.json'
import Container from '@/components/ui/Container'

interface Skill {
  icon: string
  title: string
  description: string
}

const iconMap: { [key: string]: React.ElementType } = {
  javascript: RiJavascriptFill,
  node: FaNode,
  react: FaReact,
  typescript: BiLogoTypescript,
  next: RiNextjsFill,
  express: SiExpress,
  nestjs: SiNestjs,
  tailwind: RiTailwindCssFill,
  github: FaGithub,
  shadcn: FaLayerGroup,
  zustand: FaDatabase,
  'react-query': SiReactquery,
  'framer-motion': FaMagic,
  zod: SiZod,
  postgresql: BiLogoPostgresql,
  prisma: SiPrisma,
  mongodb: BiLogoMongodb,
  docker: FaDocker,
  api: FaServer,
}

const Skills = () => {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Habilidades & Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas que utilizo para criar soluções digitais de alta
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map(({ icon, title, description }: Skill) => {
            const Icon = iconMap[icon] || FaCode
            return (
              <div
                key={title}
                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Skills
