'use client'

import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { Main } from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
      {/* SEO otimizado */}
      <NextSeo
        title="Sobre nós"
        description="Conheça nossa missão, visão e valores."
        canonical="https://www.seusite.com.br/sobre"
        openGraph={{
          url: 'https://www.seusite.com.br/sobre',
          title: 'Sobre nós - Nome da Marca',
          description: 'Conheça nossa missão, visão e valores.',
          images: [
            {
              url: 'https://www.seusite.com.br/sobre-og.jpg',
              width: 800,
              height: 600,
              alt: 'Imagem sobre nós',
            },
          ],
        }}
      />

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
          {/* Blocos de conteúdo */}
          {sections.map(({ title, content }, index) => (
            <motion.div
              key={title}
              className="w-full max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Main>
    </>
  )
}
