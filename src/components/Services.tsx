'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Dados organizados por áreas de conhecimento
const servicesData = {
  'Desenvolvimento Web': [
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Criamos interfaces intuitivas e responsivas.',
      link: '/areas/desenvolvimento-web/web-design',
    },
    {
      icon: '⚙️',
      title: 'Desenvolvimento Frontend',
      description: 'Tecnologias modernas para uma melhor experiência.',
      link: '/areas/desenvolvimento-web/frontend',
    },
  ],
  'Computação em Nuvem': [
    {
      icon: '☁️',
      title: 'Infraestrutura Cloud',
      description: 'Escalabilidade e segurança para seu negócio.',
      link: '/areas/computacao-nuvem/infraestrutura',
    },
    {
      icon: '🔐',
      title: 'Segurança na Nuvem',
      description: 'Protegemos seus dados contra ameaças.',
      link: '/areas/computacao-nuvem/seguranca',
    },
  ],
  'Marketing Digital': [
    {
      icon: '📈',
      title: 'SEO & Performance',
      description: 'Aumente a visibilidade e alcance seu público.',
      link: '/areas/marketing-digital/seo-performance',
    },
    {
      icon: '💡',
      title: 'Gestão de Anúncios',
      description: 'Campanhas estratégicas para maximizar ROI.',
      link: '/areas/marketing-digital/gestao-anuncios',
    },
  ],
  'Inteligência Artificial': [
    {
      icon: '🤖',
      title: 'Chatbots & Automação',
      description: 'Soluções inteligentes para eficiência empresarial.',
      link: '/areas/inteligencia-artificial/chatbots-automacao',
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'Modelos avançados para análise de dados.',
      link: '/areas/inteligencia-artificial/machine-learning',
    },
  ],
}

export default function Services() {
  return (
    <section className="w-full py-16 px-6 bg-[#0e1117] text-[#e5e7eb]">
      {/* Cabeçalho */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#3b82f6]">
          🧠 Áreas de Conhecimento
        </h2>
        <p className="text-lg mt-4 max-w-xl mx-auto text-[#8b949e]">
          Soluções integradas em tecnologia, inovação e performance digital.
        </p>
      </div>

      {/* Grid de serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
        {Object.entries(servicesData).map(([category, services]) => (
          <Card
            key={category}
            className="p-6 bg-[#161b22] border border-[#21262d] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-[#7c3aed] text-center">
              {category}
            </h3>
            <div className="space-y-4 mt-4">
              {services.map((service) => (
                <div key={service.title}>
                  <Link href={service.link}>
                    <h4 className="text-lg font-medium flex items-center gap-2 text-[#e5e7eb] hover:text-[#fdc700] transition">
                      {service.icon} {service.title}
                    </h4>
                  </Link>
                  <p className="text-[#8b949e]">{service.description}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Botão de ação */}
      <div className="flex justify-center mt-12">
        <Link href="/contact">
          <Button className="bg-[#fdc700] text-[#0e1117] hover:bg-[#e3b341] transition">
            Solicitar Proposta
          </Button>
        </Link>
      </div>
    </section>
  )
}
