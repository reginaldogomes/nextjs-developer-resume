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
    },
    {
      icon: '⚙️',
      title: 'Desenvolvimento Frontend',
      description: 'Tecnologias modernas para uma melhor experiência.',
    },
  ],
  'Computação em Nuvem': [
    {
      icon: '☁️',
      title: 'Infraestrutura Cloud',
      description: 'Escalabilidade e segurança para seu negócio.',
    },
    {
      icon: '🔐',
      title: 'Segurança na Nuvem',
      description: 'Protegemos seus dados contra ameaças.',
    },
  ],
  'Marketing Digital': [
    {
      icon: '📈',
      title: 'SEO & Performance',
      description: 'Aumente a visibilidade e alcance seu público.',
    },
    {
      icon: '💡',
      title: 'Gestão de Anúncios',
      description: 'Campanhas estratégicas para maximizar ROI.',
    },
  ],
  'Inteligência Artificial': [
    {
      icon: '🤖',
      title: 'Chatbots & Automação',
      description: 'Soluções inteligentes para eficiência empresarial.',
    },
    {
      icon: '🧠',
      title: 'Machine Learning',
      description: 'Modelos avançados para análise de dados.',
    },
  ],
}

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Cabeçalho */}
      <h2 className="text-4xl font-bold text-center text-primary">
        💼 Serviços e Soluções
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-xl mx-auto mt-4">
        Vendas, tecnologia e performance digital alinhadas à inovação.
      </p>

      {/* Grid de serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
        {Object.entries(servicesData).map(([category, services]) => (
          <Card
            key={category}
            className="p-6 bg-white shadow-lg rounded-lg text-center border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-secondary">
              {category}
            </h3>
            <div className="space-y-4 mt-4">
              {services.map((service) => (
                <div key={service.title}>
                  <h4 className="text-lg font-medium flex items-center justify-center gap-2 text-gray-700">
                    {service.icon} {service.title}
                  </h4>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Botão de ação */}
      <div className="flex justify-center mt-8">
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:opacity-90 transition"
        >
          Solicitar Proposta
        </Link>
      </div>
    </div>
  )
}
