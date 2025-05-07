const defaultSEOConfig = {
  title: 'Developer Resume',
  description: 'A professional developer resume built with Next.js 15.',
  canonical: 'https://yourwebsite.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    site_name: 'Developer Resume',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Developer Resume',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: 'https://twitter.com/yourhandle',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
