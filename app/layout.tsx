import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingActions } from '@/components/floating-actions'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Md Mohsin | Software Engineer & Full-Stack Developer',
  description: 'Portfolio of Md Mohsin, a Software Engineering M.Sc. candidate and Full-Stack Developer specializing in high-performance web systems and conversion-optimized digital growth strategy.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll />
          {children}
          <FloatingActions />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}

