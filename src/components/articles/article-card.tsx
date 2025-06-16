// src/components/articles/article-card.tsx

// Melhoria: Removido o 'use client' pois o componente não precisa ser renderizado no cliente.
import { FiArrowRight } from 'react-icons/fi'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CustomLink } from '../CustomLink'

interface Article {
  id: number
  title: string
  slug: string
  publishedAt: string
  resumo: string
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-foreground mb-2">
        {article.title}
      </h2>
      <p className="text-muted text-sm mb-3">
        {format(new Date(article.publishedAt), "d 'de' MMMM 'de' yyyy", {
          locale: ptBR,
        })}
      </p>
      <p className="text-sm text-muted mb-4">{article.resumo}</p>

      {/* Correção: Sintaxe do href e consistência da URL */}
      <CustomLink href={`/artigos/${article.slug}`} variant={'solid'}>
        Ler artigo <FiArrowRight className="w-4 h-4" />
      </CustomLink>
    </div>
  )
}
