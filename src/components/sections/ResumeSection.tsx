'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Container from '@/components/ui/Container'
import { Button } from '@/components/ui/button'

interface ResumeSectionProps {
  about: {
    sections: {
      icon: string
      title: string
      description: string
    }[]
  }
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ about }) => {
  // Use the specific sections from about data that are relevant for a quick resume overview
  // Or display the "About" highlights

  return (
    <section className="py-32 bg-secondary/10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Experiência & Trajetória
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Com uma carreira focada em resultados e inovação, transformo
                desafios complexos em soluções digitais eficientes.
              </p>

              <div className="grid gap-6">
                {about.sections.slice(0, 2).map((section, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-2xl bg-background p-3 rounded-full h-fit shadow-sm border border-border">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <Button asChild size="lg">
                  <Link href="/resume">
                    Ver Currículo Completo{' '}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-4 h-4" /> Download PDF
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Abstract visual representation of skills/resume */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl relative z-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <div>
                      <h4 className="font-bold text-lg">Reginaldo Gomes</h4>
                      <p className="text-sm text-muted-foreground">
                        Senior Front-end Developer
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-3/4 bg-secondary rounded" />
                    <div className="h-2 w-1/2 bg-secondary rounded" />
                    <div className="h-2 w-5/6 bg-secondary rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-24 bg-secondary/30 rounded-lg" />
                    <div className="h-24 bg-secondary/30 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResumeSection
