'use client'
import {
  FaCode,
  FaBook,
  FaClock,
  FaHeart,
  FaTachometerAlt,
  FaCloud,
} from 'react-icons/fa' // Importa ícones do React Icons
import featuresData from '@/data/teste.json' // Importa o JSON
import Section from '@/components/Section'

// Tipo para os dados do JSON
interface Feature {
  icon: string
  title: string
  description: string
}

// Mapeamento dos ícones do React Icons
const iconMap: { [key: string]: React.ElementType } = {
  code: FaCode,
  book: FaBook,
  clock: FaClock,
  heart: FaHeart,
  speed: FaTachometerAlt,
  cloud: FaCloud,
}

// Componente usando arrow function sem FC
const FeatureList = () => (
  <Section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Something You Need To Know
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map(({ icon, title, description }: Feature) => {
          const Icon = iconMap[icon] || FaCode // Usa o ícone correspondente ou FaCode como fallback
          return (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  </Section>
)

export default FeatureList
