'use client'

import { motion } from 'framer-motion'
import { CustomLink } from '@/components/Link'

const sobreData = {
  titulo: 'Quem sou eu',
  resumo:
    'Com mais de 20 anos de experiência em produtos digitais, atuei na criação de interfaces modernas, acessíveis e centradas no usuário. Meu foco é unir design, tecnologia e estratégia para entregar soluções que fazem a diferença.',
  link: {
    href: '/sobre',
    texto: 'Saiba mais sobre mim',
  },
}

const SobreResumo = () => {
  return (
    <section className="w-full bg-muted/60 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          {sobreData.titulo}
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {sobreData.resumo}
        </p>

        <div className="pt-4">
          <CustomLink href={sobreData.link.href}>
            {sobreData.link.texto}
          </CustomLink>
        </div>
      </motion.div>
    </section>
  )
}

export default SobreResumo
