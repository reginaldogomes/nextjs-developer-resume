'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { FiCpu, FiSearch } from 'react-icons/fi'
import { FaPalette, FaRobot, FaShoppingCart } from 'react-icons/fa'
import { HiOutlineRocketLaunch, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { AiOutlineAppstore, AiOutlineBarChart } from 'react-icons/ai'
import { CustomLink } from './CustomLink'

const services = [
  {
    icon: <FaPalette className="text-primary w-5 h-5" />,
    title: 'UI Design',
    description:
      'Criação de interfaces limpas, acessíveis e centradas no usuário.',
    link: '/servicos/ui-design',
  },
  {
    icon: <FiCpu className="text-primary w-5 h-5" />,
    title: 'Front-end',
    description:
      'Aplicações responsivas com React, Next.js e melhores práticas.',
    link: '/servicos/frontend',
  },
  {
    icon: <AiOutlineAppstore className="text-primary w-5 h-5" />,
    title: 'Design Systems',
    description:
      'Sistemas consistentes com componentes reutilizáveis e escaláveis.',
    link: '/servicos/design-systems',
  },
  {
    icon: <HiOutlineRocketLaunch className="text-primary w-5 h-5" />,
    title: 'Performance',
    description:
      'Sites rápidos, acessíveis e otimizados para a melhor experiência do usuário.',
    link: '/servicos/performance-acessibilidade',
  },
  {
    icon: <FaRobot className="text-primary w-5 h-5" />,
    title: 'Agentes de IA',
    description: 'Assistentes inteligentes integrados ao seu negócio digital.',
    link: '/servicos/agentes-ia',
  },
  {
    icon: <AiOutlineBarChart className="text-primary w-5 h-5" />,
    title: 'Analise de Dados',
    description: 'Transformação de dados em insights valiosos para decisões.',
    link: '/servicos/analise-dados',
  },
  {
    icon: <FiSearch className="text-primary w-5 h-5" />,
    title: 'SEO Técnico',
    description:
      'Otimização do site para melhor ranqueamento e performance nas buscas.',
    link: '/servicos/seo-tecnico',
  },
  {
    icon: <HiOutlineGlobeAlt className="text-primary w-5 h-5" />,
    title: 'Estratégias',
    description:
      'Estratégias Digitais, Integração com APIs, CRMs e automações.',
    link: '/servicos/integracoes-web',
  },
  {
    icon: <FaShoppingCart className="text-primary w-5 h-5" />,
    title: 'E-commerce',
    description:
      'Lojas virtuais modernas, seguras e otimizadas para conversão.',
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
                  {service.icon}
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed whitespace-pre-line text-justify">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <CustomLink href={service.link} variant={'solid'}>
                  Saiba Mais
                </CustomLink>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
