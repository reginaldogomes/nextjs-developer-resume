'use client'
import { motion } from 'framer-motion'
import Main from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'

const userData = {
  about:
    'Sou um Desenvolvedor Full-Stack Web com Especialização em Front-End, com mais de 15 anos de experiência no desenvolvimento de aplicações web. Minha atuação é focada na criação de interfaces de alto desempenho, garantindo responsividade, usabilidade e uma experiência aprimorada para o usuário.',
  journey:
    'Minha trajetória começou há mais de 15 anos, quando me apaixonei pelo desenvolvimento web. Desde então, trabalhei em diversos projetos, adquirindo conhecimento em tecnologias modernas e metodologias ágeis. Minha especialidade é transformar ideias em interfaces intuitivas e de alto desempenho.',
}

const sections = [
  { title: 'Sobre Mim', content: userData.about },
  { title: 'Minha Trajetória', content: userData.journey },
]

export default function Page() {
  return (
    <>
      <Main>
        <PageHead
          title="Sobre"
          description="Conheça minha história e experiência profissional."
        />

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="bg-surface text-foreground border border-border rounded-2xl p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                {section.title}
              </h2>
              <p className="text-muted leading-relaxed">{section.content}</p>
            </motion.section>
          ))}
        </motion.div>
      </Main>
    </>
  )
}
