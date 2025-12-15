import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{
    slug: string
  }>
}

// Gera os metadados da página (título, descrição) para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  return {
    title: post.title,
    description: post.excerpt,
  }
}

// Gera as rotas estáticas no momento da build
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  let post: PostData

  try {
    post = await getPostData(slug)
  } catch (error) {
    // Se o post não for encontrado, exibe a página 404
    notFound()
  }

  return (
    <>
      <article className="container mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Por {post.author} em{' '}
            {new Date(post.date).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        {/* Aqui a mágica do @tailwindcss/typography acontece */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </>
  )
}
