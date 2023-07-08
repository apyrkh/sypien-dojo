'use client'
import ContactUsButton from '@/components/navbar/ContactUsButton'
import logoSrc from 'public/logo.png'
import { getText } from '@/utils/textUtils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import { links } from '@/constants/data'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo_link}>
        <Image
          className={styles.logo_img}
          src={logoSrc}
          alt={getText('navbar.logo.alt')}
        />
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.url} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <ThemeToggle />
      </div>
      <ContactUsButton />
    </div>
  )
}

export default Navbar
