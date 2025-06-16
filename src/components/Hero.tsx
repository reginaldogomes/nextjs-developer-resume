'use client'

import { motion } from 'framer-motion'
import { CustomLink } from './CustomLink'

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
    className="relative w-full min-h-[480px] flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay com opacidade e desfoque */}
    <div className="absolute inset-0 bg-accent/85 backdrop-blur-none z-0" />

    {/* Conteúdo animado */}
    <motion.div
      className="relative z-10 max-w-3xl px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
        {name}
      </h1>

      <p className="mt-3 sm:text-2xl text-white/90 font-medium tracking-wide drop-shadow-md">
        {title}
      </p>

      <motion.p
        className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed drop-shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {message}
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {ctaLinks.map((cta, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <CustomLink href={cta.url} variant={'solid'}>
              {cta.label}
            </CustomLink>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
