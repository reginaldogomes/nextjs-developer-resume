import Main from '@/components/layout/Main'
import Hero from '@/components/Hero'
import AboutMe from '@/components/Widget'
import Section from '@/components/layout/Section'
import Services from '@/components/Services'

const aboutMeCards = [
  {
    title: 'Sobre',
    description:
      'Mais do que escrever códigos, ofereço soluções digitais estratégicas que geram valor real e resultados concretos para empresas e clientes.',
    buttonText: 'Ver detalhes',
    buttonLink: '/about',
  },
  {
    title: 'Currículo',
    description:
      'Minha trajetória inclui ampla atuação corporativa em projetos de tecnologia, destacando competências técnicas e foco em inovação estratégica.',
    buttonText: 'Ver detalhes',
    buttonLink: '/resume',
  },
]

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
      <Section className="flex-row">
        {aboutMeCards.map((card, index) => (
          <AboutMe
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
          />
        ))}
      </Section>
      <Services />
    </Main>
  )
}
