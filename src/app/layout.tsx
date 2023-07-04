import 'the-new-css-reset/css/reset.css'
import styles from './layout.module.css'
import './globals.css'
import { getText } from '@/utils/textUtils'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import TitleText from '@/components/titleText/TitleText'
import Footer from '@/components/footer/Footer'
// import { pageColor } from '@/utils/ColorByPath'

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
  const pageColor = 'red'
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className={styles.welcomeContainer}>
            <Navbar color={pageColor} />
            <div className={styles.imgContainer}>
              <Image
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/348869093_954863232211020_1462760187902663962_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wi5BQJ-Gc8AAX-41HhL&_nc_ht=scontent-waw1-1.xx&oh=00_AfCXkoBYLtjSitYkchKF4BuOJzHTOb5BS0LT4EAzsTzwFA&oe=64A4A453"
                alt="photo"
                fill={true}
                className={styles.mainPhoto}
              />
              <div className={styles.textContainer}>
                <div className={styles.titleContainer}>
                  <TitleText title="news" desc="desc" color={pageColor} />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <Footer color={pageColor} />
        </footer>
      </body>
    </html>
  )
}
