// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Define o tipo para os dados de um post
export type PostData = {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  contentHtml: string
}

// Define um tipo mais simples para a lista de posts, sem o conteúdo completo
export type PostPreview = Omit<PostData, 'contentHtml'>

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export function getSortedPostsData(): PostPreview[] {
  // Pega os nomes dos arquivos na pasta /content/posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" do nome do arquivo para obter o slug
    const slug = fileName.replace(/\.md$/, '')

    // Lê o arquivo markdown como uma string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Usa gray-matter para processar os metadados do post
    const matterResult = matter(fileContents)

    // Combina os dados com o slug
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      excerpt: matterResult.data.excerpt,
    }
  })

  // Ordena os posts por data (mais recente primeiro)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  // Retorna uma lista de objetos com a chave `slug`
  // Ex: [ { params: { slug: 'primeiro-post' } }, { params: { slug: 'segundo-post' } } ]
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    }
  })
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Usa gray-matter para processar os metadados
  const matterResult = matter(fileContents)

  // Usa remark para converter markdown em HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combina os dados com o slug e o conteúdo HTML
  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    excerpt: matterResult.data.excerpt,
  }
}
