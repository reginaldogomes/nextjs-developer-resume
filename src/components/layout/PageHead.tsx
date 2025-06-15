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
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-primary">{title}</h1>
      <p className="text-muted leading-relaxed text-2xl whitespace-pre-line mt-2">
        {description}
      </p>
    </div>
  )
}
