import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { articles } from '@/data/articles'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: 'Article not found',
      description: 'The requested article could not be found.',
    }
  }

  return {
    title: `${article.title} | Reginaldo Gomes`,
    description: article.resumo,
    openGraph: {
      title: `${article.title} | Reginaldo Gomes`,
      description: article.resumo,
      url: `/articles/${article.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Reginaldo Gomes`,
      description: article.resumo,
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {article.title}
        </h1>
        <time className="text-muted text-sm">
          Published on{' '}
          {format(new Date(article.publishedAt), 'MMMM d, yyyy', {
            locale: enUS,
          })}
        </time>
      </header>

      <section className="prose prose-invert max-w-none text-justify">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </section>
    </article>
  )
}
