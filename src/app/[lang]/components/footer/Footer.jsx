import styles from './footer.module.css'
import React from 'react'
import logoSrc from 'public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { getText } from '@/utils/textUtils'
import { facebookPhoto, links } from '@/constants/data'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.contact}>
          <Link href="/" className={styles.logo_link}>
            <Image
              className={styles.logo_img}
              src={logoSrc}
              alt={getText('navbar.logo.alt')}
            />
          </Link>
        </div>
        <div className={styles.nav}>
          {links.map((link, index) => (
            <Link key={index} className={styles.link} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.facebook}>
          <h2>Facebook</h2>
          <div className={styles.photoContainer}>
            {facebookPhoto.map((photo, index) => (
              <Link
                href="https://www.facebook.com/karateIchibanSypienDojo"
                key={index}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={60}
                  height={60}
                  className={styles.img}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
