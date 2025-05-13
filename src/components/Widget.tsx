'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface AboutMeProps {
  title: string
  description: string
  icon?: React.ReactNode
  buttonText?: string
  buttonLink?: string
}

const AboutMe: React.FC<AboutMeProps> = ({
  title,
  description,
  icon,
  buttonText = 'Ver detalhes',
  buttonLink = '#',
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full p-6 rounded-2xl bg-zinc-800/80 text-zinc-200 backdrop-blur-sm shadow-lg flex flex-col justify-between transition hover:shadow-xl"
    >
      {/* Ícone dinâmico */}
      <div className="mb-4">{icon}</div>

      {/* Conteúdo */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">{title}</h2>
        <p className="text-sm leading-relaxed text-zinc-300">{description}</p>
      </div>

      {/* Botão */}
      <div className="mt-6">
        <Link
          href={buttonLink}
          className="inline-block px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
        >
          {buttonText}
        </Link>
      </div>
    </motion.section>
  )
}

export default AboutMe
