import { Metadata } from 'next'
import Breadcrumb from './Breadcrumb'

interface PageHeadProps {
  title: string
  description?: string
}

// Função opcional para uso em arquivos de página (não será usada diretamente no componente)
export function generateMetadata({
  title,
  description,
}: PageHeadProps): Metadata {
  return {
    title,
    description,
  }
}

export default function PageHead({ title, description }: PageHeadProps) {
  return (
    <header className="w-full p-8 text-center shadow-md bg-accent/5 text-white">
      <Breadcrumb />
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-lg">{description}</p>}
    </header>
  )
}
