'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    icon: '🎨',
    title: 'UI Design',
    description:
      'Criação de interfaces limpas, acessíveis e centradas no usuário.',
    link: '/servicos/ui-design',
  },
  {
    icon: '⚛️',
    title: 'Front-end',
    description:
      'Aplicações responsivas com React, Next.js e melhores práticas.',
    link: '/servicos/frontend',
  },
  {
    icon: '🧩',
    title: 'Design Systems',
    description:
      'Sistemas consistentes com componentes reutilizáveis e escaláveis.',
    link: '/servicos/design-systems',
  },
  {
    icon: '🚀',
    title: 'Performance',
    description:
      'Sites rápidos, acessíveis e otimizados para a melhor experiência do usuário.',
    link: '/servicos/performance-acessibilidade',
  },
  {
    icon: '🤖',
    title: 'Agentes de IA',
    description: 'Assistentes inteligentes integrados ao seu negócio digital.',
    link: '/servicos/agentes-ia',
  },
  {
    icon: '📈',
    title: 'Dados',
    description: 'Transformação de dados em insights valiosos para decisões.',
    link: '/servicos/analise-dados',
  },
  {
    icon: '🔍',
    title: 'SEO Técnico',
    description:
      'Otimização do site para melhor ranqueamento e performance nas buscas.',
    link: '/servicos/seo-tecnico',
  },
  {
    icon: '⚙️',
    title: 'Estratégias',
    description:
      'Estratégias Digitais, Integração com APIs, CRMs e automações.',
    link: '/servicos/integracoes-web',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description:
      'Desenvolvimento de lojas virtuais modernas, seguras e otimizadas para conversão.',
    link: '/servicos/ecommerce',
  },
]

export default function Services() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full flex flex-col justify-between border border-border bg-card shadow-sm hover:shadow-md transition">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline transition-colors"
                >
                  Saiba mais <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
