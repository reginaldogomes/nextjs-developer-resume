'use client'
import { motion } from 'framer-motion'
import Main from '@/components/layout/Main'
import PageHead from '@/components/layout/PageHead'

const userData = {
  about:
    'Sou natural de Pirapora, Minas Gerais, e atualmente resido em Belo Horizonte. Tenho 45 anos e atuo na área de tecnologia há mais de duas décadas, com forte especialização em design de interfaces e desenvolvimento web. Atualmente, estou em processo de graduação em Gestão da Tecnologia da Informação, ampliando ainda mais minha visão estratégica sobre soluções digitais e infraestrutura tecnológica.\n\nSou apaixonado por tecnologia, natureza e música. Nos meus momentos livres, gosto de viajar para conhecer novos lugares, explorar diferentes culturas e praticar esportes ao ar livre. Acredito que essas vivências fortalecem minha criatividade e me ajudam a manter o equilíbrio entre a vida pessoal e profissional.',

  journey:
    'Minha carreira começou em Brasília, no início dos anos 2000, quando tive a oportunidade de atuar como web designer. Essa experiência marcou o início da minha jornada no desenvolvimento web, área pela qual me apaixonei e sigo até hoje. Desde então, passei por empresas de diferentes segmentos e regiões do Brasil, incluindo capitais como São Paulo, Florianópolis e Belo Horizonte. Atuei em projetos relevantes em empresas como Softplan, Saraiva, Locaweb e Squadra, construindo uma base sólida em tecnologia e design digital.',
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
              <p className="text-muted leading-relaxed whitespace-pre-line text-justify">
                {section.content}
              </p>
            </motion.section>
          ))}
        </motion.div>
      </Main>
    </>
  )
}
