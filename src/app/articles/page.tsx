// src/app/artigos/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artigos | Reginaldo Gomes',
  description:
    'Conteúdos sobre desenvolvimento front-end, performance, observabilidade e melhores práticas com React, TypeScript e ferramentas modernas.',
}

// export default function ArtigosPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6 text-foreground">Artigos</h1>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <ArticleCard key={articles.id} articles={article} />
//         ))}
//       </div>
//     </section>
//   )
// }

import Link from 'next/link'
import { getSortedPostsData, PostPreview } from '@/lib/posts'

export default function ArtigosPage() {
  const allPosts: PostPreview[] = getSortedPostsData()

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold tracking-tighter text-center text-gray-900 dark:text-gray-100">
        Meu Blog
      </h1>
      <div className="space-y-8">
        {allPosts.map(({ slug, title, date, excerpt }) => (
          <article key={slug} className="group">
            <Link href={`/blog/${slug}`} className="block">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h2 className="mb-2 text-2xl font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {title}
                </h2>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Publicado em{' '}
                  {new Date(date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
