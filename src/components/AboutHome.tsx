'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const sobreData = {
  titulo: 'Sobre',
  resumo:
    'Sou natural de Pirapora, Minas Gerais, tenho 45 anos e atualmente resido em Belo Horizonte. Atuo na área de tecnologia com ampla experiência em design de interfaces e desenvolvimento web front-end, participando de projetos voltados à criação de soluções digitais funcionais, seguras e bem estruturadas.',
  link: {
    href: '/about',
    texto: 'Saiba mais sobre mim',
  },
}

const SobreResumo = () => {
  return (
    <section className="bg-card border border-border p-6 rounded-xl shadow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-accent">
          {sobreData.titulo}
        </h2>

        <p className="text-muted leading-relaxed whitespace-pre-line text-justify max-w-2xl mx-auto">
          {sobreData.resumo}
        </p>

        <div className="pt-4">
          <Button asChild size="lg" className="px-6 text-base shadow-lg">
            <Link href={sobreData.link.href}>{sobreData.link.texto}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default SobreResumo
