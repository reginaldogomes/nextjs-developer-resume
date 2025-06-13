import Hero from '@/components/Hero'
import AboutMe from '@/components/Widget'
import Section from '@/components/layout/Section'
import AboutHome from '@/components/AboutHome'

import { createMetadata } from '@/lib/seo'
import CardsSection from '@/components/CardSection'

export const metadata = createMetadata({
  title: 'Reginaldo Gomes | Desenvolvedor Front-end | UX/UI | Web Interface',
  description:
    'Desenvolvedor front-end com foco em React, Next.js, TypeScript e soluções em nuvem. Crio experiências modernas, rápidas e acessíveis.',
  path: '/about',
})

const aboutMeCards = [
  {
    title: 'Currículo',
    description:
      'Resumo da minha experiência profissional, com foco em desenvolvimento de soluções digitais estratégicas que entregam valor e resultados concretos para empresas e clientes.',
    buttonText: 'Ver detalhes',
    buttonLink: '/resume',
  },
  {
    title: 'Serviços',
    description:
      'Descrição dos serviços que ofereço, fundamentados em ampla atuação corporativa em tecnologia, combinando expertise técnica e inovação para impulsionar negócios.',
    buttonText: 'Ver detalhes',
    buttonLink: '/solutions',
  },
]

export default function Home() {
  return (
    <>
      <Hero
        name="Reginaldo Gomes"
        title="Front-end Developer · UX/UI · Cloud Solutions"
        backgroundImage="/images/hero_bg.webp"
        message="Desenvolvedor front-end com forte atuação no design e construção de interfaces digitais modernas, acessíveis e orientadas à experiência do usuário. Integro estética e funcionalidade para criar soluções ágeis, escaláveis e alinhadas às boas práticas de performance web."
        ctaLinks={[{ label: 'Fale comigo', url: '/contact' }]}
      />
      <section className="w-full max-w-5xl mx-auto px-4 py-16 space-y-12">
        <AboutHome />
        <CardsSection />
      </section>
    </>
  )
}
