import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingActions } from '@/components/floating-actions'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = 'https://md-mohsin.vercel.app'
const ogImage = `https://api.microlink.io/?url=${siteUrl}&screenshot=true&meta=false&embed=screenshot.url&type=jpeg`

export const metadata: Metadata = {
  title: 'Md Mohsin | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Md Mohsin, a Software Engineering M.Sc. candidate and Full-Stack Developer specializing in high-performance web systems and conversion-optimized digital growth strategy.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Md Mohsin | Software Engineer & Full-Stack Developer',
    description: 'Portfolio of Md Mohsin, a Software Engineering M.Sc. candidate and Full-Stack Developer specializing in high-performance web systems and conversion-optimized digital growth strategy.',
    url: siteUrl,
    siteName: 'Md Mohsin Portfolio',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Md Mohsin | Software Engineer & Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Mohsin | Software Engineer & Full-Stack Developer',
    description: 'Portfolio of Md Mohsin, a Software Engineering M.Sc. candidate and Full-Stack Developer specializing in high-performance web systems and conversion-optimized digital growth strategy.',
    images: [ogImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background" suppressHydrationWarning>
        <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
          <SmoothScroll />
          {children}
          <FloatingActions />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}

