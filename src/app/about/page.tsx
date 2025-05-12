'use client'
import { motion } from 'framer-motion'
import { Main } from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import About from '@/components/About'

const userData = {
  about:
    'Sou um Desenvolvedor Full-Stack Web com Especialização em Front-End, com mais de 15 anos de experiência no desenvolvimento de aplicações web. Minha atuação é focada na criação de interfaces de alto desempenho, garantindo responsividade, usabilidade e uma experiência aprimorada para o usuário.',
  journey:
    'Minha trajetória começou há mais de 15 anos, quando me apaixonei pelo desenvolvimento web. Desde então, trabalhei em diversos projetos, adquirindo conhecimento em tecnologias modernas e metodologias ágeis. Minha especialidade é transformar ideias em interfaces intuitivas e de alto desempenho.',
}

// Estrutura dos blocos de conteúdo
const sections = [
  { title: 'Sobre Mim', content: userData.about },
  { title: 'Minha Trajetória', content: userData.journey },
]

export default function Page() {
  return (
    <>
      {/* Layout principal */}
      <Main>
        <PageHead
          title="Sobre"
          description="Esta é uma breve descrição do conteúdo."
        />

        {/* Conteúdo animado */}
        <motion.div
          className="container mx-auto p-6 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
      </Main>
    </>
  )
}
