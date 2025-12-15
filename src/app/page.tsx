import Hero from '@/components/sections/Hero'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import ServicesCards from '@/components/sections/ServicesCards'
import ResumeSection from '@/components/sections/ResumeSection'
import Skills from '@/components/Skills'

import { createMetadata } from '@/lib/seo'

// Import data
import projectsData from '@/data/projects.json'
import servicesData from '@/data/services.json'
import aboutData from '@/data/about.json'

export const metadata = createMetadata({
  title: 'Reginaldo Gomes | Desenvolvedor Fullstack | JavaScript/TypeScript',
  description:
    'Desenvolvedor Fullstack especializado em React, Node.js, TypeScript e soluções em nuvem. Crio aplicações completas, escaláveis e performáticas.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <Hero
        name={aboutData.name}
        title={aboutData.title}
        slogan={aboutData.slogan}
        image={aboutData.image}
      />
      <Skills />
      <ServicesCards services={servicesData} />
      <ProjectsGrid projects={projectsData} />
      <ResumeSection about={aboutData} />
    </>
  )
}
