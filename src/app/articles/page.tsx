import { Metadata } from 'next'
import { articles } from '@/data/articles'
import { ArticleCard } from '@/components/articles/article-card'

export const metadata: Metadata = {
  title: 'Artigos | Reginaldo Gomes',
  description:
    'Conteúdos sobre desenvolvimento front-end, performance, observabilidade e melhores práticas com React, TypeScript e ferramentas modernas.',
}

export default function ArtigosPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Artigos</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
