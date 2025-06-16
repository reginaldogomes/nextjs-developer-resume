// app/servicos/[slug]/page.tsx
import { services } from '@/data/services'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) return notFound()

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-4">
        {service.icon}
        <h1 className="text-2xl font-bold text-foreground">{service.title}</h1>
      </div>
      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{service.content}</p>
      </div>
    </section>
  )
}
