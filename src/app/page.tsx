import { Main } from '@/components/layout/Main'
import Hero from '@/components/Hero'

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
    </Main>
  )
}
