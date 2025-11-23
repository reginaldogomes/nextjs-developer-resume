'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { Button } from '@/components/ui/button'

interface HeroProps {
  name: string
  title: string
  slogan: string
  image?: string
}

const Hero: React.FC<HeroProps> = ({ name, title, slogan }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl opacity-30" />
      </div>

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                {title}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Olá, eu sou <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  {name}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {slogan}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12 text-base"
              >
                <Link href="/contact">
                  Fale Comigo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base"
              >
                <Link href="/projects">Ver Projetos</Link>
              </Button>
            </motion.div>
          </div>

          {/* Optional: Image or Abstract Graphic */}
          {/* <div className="flex-1 relative">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" />
          </div> */}
        </div>
      </Container>
    </section>
  )
}

export default Hero
