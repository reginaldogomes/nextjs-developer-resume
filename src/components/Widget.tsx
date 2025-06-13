'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AboutCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  className?: string
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  icon,
  buttonText = 'Saiba mais',
  buttonLink = '#',
  className,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        'w-full bg-muted/10 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition',
        className
      )}
    >
      {/* Icone */}
      {icon && <div className="mb-4 text-primary text-3xl">{icon}</div>}

      {/* Conteúdo */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-foreground mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Botão */}
      <div className="mt-6">
        <Link
          href={buttonLink}
          className="inline-block text-sm px-4 py-2 rounded-md bg-primary text-background font-medium hover:brightness-110 transition"
        >
          {buttonText}
        </Link>
      </div>
    </motion.section>
  )
}

export default AboutCard
