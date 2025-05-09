import { Main } from '@/components/layout/Main'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import ServicesSection from '@/components/ServiceSection'

export default function Home() {
  return (
    <Main>
      <Hero
        name="Reginaldo Gomes"
        title="Desenvolvedor Front-end | Cloud Engineer | Especialista em Transformação Digital"
        backgroundImage="/images/hero_bg.webp"
        message="Transformando ideias em soluções digitais com design moderno, performance e inteligência de negócio."
        ctaLinks={[
          { label: '📩 Fale comigo', url: '/contato' },
          { label: '📁 Baixar CV', url: '/cv.pdf' },
          { label: '📎 Ver projetos', url: '/projetos' },
        ]}
      />
      <AboutMe
        title="Sobre Mim"
        description="Mais do que código, entrego estratégia digital com impacto nos resultados do cliente."
        buttonText="Saiba mais"
        buttonLink="/sobre"
      />
      <ServicesSection />
    </Main>
  )
}
