import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Alex - Developer & Marketer',
  description: 'Premium portfolio showcasing full-stack development and growth marketing expertise',
  url: 'https://your-domain.com',
  twitter: '@yourhandle',
  image: '/og-image.png',
}

export const getMetadata = (title: string, description: string, path: string): Metadata => {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = new URL(path, siteConfig.url).toString()

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: siteConfig.twitter,
      images: [siteConfig.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
