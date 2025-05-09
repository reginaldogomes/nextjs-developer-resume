'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  name: string
  title: string
  backgroundImage: string
  message: string
  ctaLinks: { label: string; url: string }[]
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  backgroundImage,
  message,
  ctaLinks,
}) => (
  <section
    className="relative w-full h-100 flex flex-col items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-accent/85"></div>

    {/* Conteúdo Animado */}
    <motion.div
      className="relative z-10 max-w-3xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Nome e Título */}
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="mt-2 text-xl">{title}</p>

      {/* Mensagem de Impacto */}
      <motion.p
        className="mt-6 text-lg italic text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {message}
      </motion.p>

      {/* CTAs Animados */}
      <motion.div className="mt-6 flex gap-4 justify-center">
        {ctaLinks.map((cta, index) => (
          <motion.a
            key={index}
            href={cta.url}
            className="px-6 py-3 text-lg font-semibold bg-white text-blue-500 rounded-md shadow-md hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
          >
            {cta.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
