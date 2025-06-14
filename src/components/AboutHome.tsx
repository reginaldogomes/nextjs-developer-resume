'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const sobreData = {
  titulo: 'Sobre',
  resumo:
    'Profissional com mais de 20 anos de experiência em tecnologia, especializado em design de interfaces e desenvolvimento web. Natural de Pirapora e residente em Belo Horizonte, está em formação em Gestão da TI, unindo visão estratégica a soluções digitais. Apaixonado por tecnologia, natureza e música.',
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
