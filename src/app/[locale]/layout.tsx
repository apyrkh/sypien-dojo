import 'the-new-css-reset/css/reset.css'
import './globals.css'
import styles from './layout.module.css'
import { NextAuthProvider } from '@/app/[locale]/nextAuthProvider'
import { getText } from '@/utils/textUtils'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/app/[locale]/components/navbar/Navbar'
import MainImage from '@/app/[locale]/components/mainImage/MainImage'
import TitleText from '@/app/[locale]/components/titleText/TitleText'
import Footer from '@/app/[locale]/components/footer/Footer'
import { LoaderProvider } from '@/context/LoaderContext'
import BlockLoader from '@/app/[locale]/components/blockLoader/BlockLoader'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }]
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let dict
  try {
    dict = (await import(`../../dictionaries/${locale}.json`)).default
  } catch (error: any) {
    throw new Error(`Errror: ${error.message}`)
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={dict}>
          <NextAuthProvider>
            <LoaderProvider>
              <BlockLoader />
              <header className={styles.header}>
                <div className={styles.welcomeContainer}>
                  <Navbar />
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
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
