import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { aboutData } from '@/data/about'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Seção Principal */}
      {/* <section className="flex flex-col lg:flex-row items-center gap-8">
        <Image
          src={aboutData.image}
          alt={aboutData.name}
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
      </section> */}

      {/* Conteúdo Principal */}
      <Card className="mt-10 p-6 bg-white shadow-md rounded-lg space-y-6">
        {aboutData.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold">
              {section.icon} {section.title}
            </h2>
            <p className="mt-2 text-gray-700">{section.description}</p>
          </section>
        ))}
      </Card>
    </div>
  )
}
