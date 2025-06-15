'use client'
import PageHead from '@/components/layout/PageHead'
import { motion } from 'framer-motion'

const PageHeadData = {
  title: 'Sobre',
  description:
    'Um breve panorama sobre quem sou e a minha trajetória profissional.',
}

const userData = {
  about:
    'Sou natural de Pirapora, Minas Gerais, tenho 45 anos e atualmente resido em Belo Horizonte. Atuo na área de tecnologia com ampla experiência em design de interfaces e desenvolvimento web front-end, participando de projetos voltados à criação de soluções digitais funcionais, seguras e bem estruturadas.\n\nAtualmente, estou cursando a graduação em Gestão da Tecnologia da Informação, com o objetivo de fortalecer minha atuação estratégica em ambientes digitais e ampliar meus conhecimentos em infraestrutura, segurança e governança de TI.\n\nFora do ambiente profissional, tenho interesse por viagens, esportes ao ar livre e música. Valorizo o equilíbrio entre vida pessoal e trabalho, mantendo uma rotina que contribui para a disciplina e a consistência no desempenho profissional.',

  journey:
    'Minha trajetória profissional é marcada por uma vivência abrangente nas diversas áreas da Tecnologia da Informação. Iniciei com foco em design para web, o que despertou meu interesse pelo desenvolvimento front-end e, com o tempo, me levou a explorar também o back-end e a computação em nuvem. Essa jornada me proporcionou uma compreensão sólida de todas as camadas envolvidas no desenvolvimento de sistemas.\n\nAo longo da minha carreira, tive uma atuação expressiva em projetos de e-commerce, contribuindo para o desenvolvimento de plataformas robustas, funcionais e orientadas à conversão. Trabalhei em empresas de tecnologia, agências web e consultorias de marketing, atuando em cidades como Brasília, São Paulo, Rio de Janeiro, Curitiba, Florianópolis e Belo Horizonte.\n\nCom uma visão técnica integrada, participo de projetos com entendimento completo do ciclo de desenvolvimento, da interface ao ambiente de produção, sempre com foco na eficiência, na qualidade e na experiência do usuário.',
}

const sections = [
  { title: 'Sobre Mim', content: userData.about },
  { title: 'Minha Trajetória', content: userData.journey },
]

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <PageHead
        title={PageHeadData.title}
        description={PageHeadData.description}
      />
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className="bg-card text-foreground border border-border rounded-2xl p-6 shadow-md"
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
    </section>
  )
}
