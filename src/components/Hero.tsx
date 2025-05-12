'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
    className="relative w-full min-h-150 flex flex-col items-center justify-center text-center text-white"
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
      className="relative z-10 max-w-3xl px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="mt-2 text-2xl text-gray-300">{title}</p>
      <motion.p
        className="mt-6 text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {message}
      </motion.p>

      {/* CTAs Animados - Apenas 2 Botões com Link */}
      <motion.div className="mt-6 flex gap-4 justify-center">
        {ctaLinks.slice(0, 2).map((cta, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}>
            <Link href={cta.url} passHref>
              <Button variant="default" className="bg-accent px-6 py-3 text-lg">
                {cta.label}
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
