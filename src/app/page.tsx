import Main from '@/components/layout/Main'
import Hero from '@/components/Hero'
import AboutMe from '@/components/Widget'
import Section from '@/components/layout/Section'
import AboutHome from '@/components/AboutHome'

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
        title="Front-end Developer · UX/UI Designer · Web Interface"
        backgroundImage="/images/hero_bg.webp"
        message="Transformo ideias em interfaces modernas, acessíveis e de alto desempenho. Com foco em usabilidade, performance e design centrado no usuário, desenvolvo experiências digitais que encantam e geram resultados."
        ctaLinks={[{ label: '📩 Fale comigo', url: '/contact' }]}
      />
      <AboutHome />

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
    </Main>
  )
}
