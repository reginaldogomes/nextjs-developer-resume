// lib/seo.ts
import type { Metadata } from 'next'

interface SeoParams {
  title: string
  description: string
  path: string
}

const siteUrl = 'https://reginaldogomes.dev.br'
const siteName = 'Reginaldo Gomes'
const defaultImage = `${siteUrl}/images/og-image.jpg`

export function createMetadata({
  title,
  description,
  path,
}: SeoParams): Metadata {
  const fullUrl = `${siteUrl}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultImage],
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: 'Reginaldo Gomes' }],
    creator: 'Reginaldo Gomes',
  }
}
