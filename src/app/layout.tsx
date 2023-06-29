import 'the-new-css-reset/css/reset.css'
import './globals.css'
import { getText } from '@/utils/textUtils'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Roboto({ subsets: ['latin-ext'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: getText('home.meta.title'),
  description: getText('home.meta.description'),
  keywords: getText('home.meta.keywords'),
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
