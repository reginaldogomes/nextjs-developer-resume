'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import PageHead from '@/components/layout/PageHead'
import aboutData from '@/data/about.json'
import { createMetadata } from '@/lib/seo'

const PageHeadData = {
  title: 'Sobre',
  description:
    'Conheça minha trajetória profissional e experiência como desenvolvedor fullstack.',
}

export default function Page() {
  return (
    <section className="w-full py-24">
      <Container>
        <PageHead
          title={PageHeadData.title}
          description={PageHeadData.description}
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {aboutData.name}
          </h1>
          <p className="text-xl text-primary font-medium mb-4">
            {aboutData.title}
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            {aboutData.slogan}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12">
          {aboutData.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{section.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
