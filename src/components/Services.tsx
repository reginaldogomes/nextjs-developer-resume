import { servicesData } from '@/data/services'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center">💼 Serviços e Soluções</h2>
      <p className="text-lg text-gray-600 text-center max-w-xl mx-auto mt-4">
        Vendas, tecnologia e performance digital alinhadas à inovação.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold">
              {service.icon} {service.title}
            </h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Solicitar Proposta
        </Link>
      </div>
    </div>
  )
}
