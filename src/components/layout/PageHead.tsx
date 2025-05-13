import { Metadata } from 'next'

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
    <div className="w-full p-8 text-center shadow-md bg-accent/5 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-5x1">{description}</p>}
    </div>
  )
}
