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
    description: 'Sites rápidos, otimizados e inclusivos desde o código.',
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
    description: 'Otimização do site para melhor ranqueamento e performance.',
    link: '/servicos/seo-tecnico',
  },
  {
    icon: '⚙️',
    title: 'Estratégias',
    description: 'Integração com APIs, CRMs e ferramentas automatizadas.',
    link: '/servicos/integracoes-web',
  },
]

export default function Services() {
  return (
    <section className="w-full py-20 px-6 bg-background text-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 text-left shadow-sm hover:shadow-md border border-border bg-card transition">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                <span className="text-2xl">{service.icon}</span> {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center gap-1 text-primary text-sm mt-4 hover:underline"
              >
                Saiba mais <FiArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/contact">
          <Button className="px-6 py-2 text-base font-medium">
            Solicitar proposta personalizada
          </Button>
        </Link>
      </div>
    </section>
  )
}
