import { Metadata } from 'next'

interface PageHeadProps {
  title: string
  description?: string
}

// Função para metadados da página (SEO)
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
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  )
}
