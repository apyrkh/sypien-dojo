import 'the-new-css-reset/css/reset.css'
import './globals.css'
import styles from './layout.module.css'
import { NextAuthProvider } from '@/app/[lang]/nextAuthProvider'
import { getText } from '@/utils/textUtils'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/app/[lang]/components/navbar/Navbar'
import MainImage from '@/app/[lang]/components/mainImage/MainImage'
import TitleText from '@/app/[lang]/components/titleText/TitleText'
import Footer from '@/app/[lang]/components/footer/Footer'
import { LoaderProvider } from '@/context/LoaderContext'
import BlockLoader from '@/app/[lang]/components/blockLoader/BlockLoader'
import { i18n } from 'i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Montserrat({
  subsets: ['latin-ext'],
  weight: ['300', '400', '700'],
})

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
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NextAuthProvider>
          <LoaderProvider>
            <BlockLoader />
            <header className={styles.header}>
              <div className={styles.welcomeContainer}>
                <Navbar lang={params.lang} />
                <div className={styles.imgContainer}>
                  <MainImage />
                  <div className={styles.titleContainer}>
                    <TitleText />
                  </div>
                </div>
              </div>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </LoaderProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
