'use client'

import { FaLaptopCode, FaChartLine, FaRobot, FaCloud } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: <FaLaptopCode />,
    title: 'Desenvolvimento de Sites e Sistemas',
    description: 'UX moderno, responsivo, SEO e performance.',
  },
  {
    icon: <FaChartLine />,
    title: 'BI e Dashboards',
    description: 'Soluções com Power BI, Azure, dados e insights.',
  },
  {
    icon: <FaRobot />,
    title: 'IA e Automação de Marketing',
    description: 'Chatbots, IA generativa e fluxos com CRM.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Infra',
    description: 'Deploys modernos com Vercel, Azure, PostgreSQL, Docker.',
  },
]

const ServicesSection: React.FC = () => (
  <section className="w-full py-16 px-6 bg-gray-800 text-white text-center">
    <h2 className="text-3xl font-bold mb-8">Serviços e Soluções</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-6 rounded-lg shadow-md bg-gray-700"
        >
          <span className="text-4xl text-blue-400">{service.icon}</span>
          <div className="text-left">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        </div>
      ))}
    </div>

    <Button
      className="mt-8 bg-blue-500 text-white hover:bg-blue-600 transition"
      asChild
    >
      <a href="/proposta">Solicitar proposta</a>
    </Button>
  </section>
)

export default ServicesSection
