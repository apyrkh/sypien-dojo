'use client'
import ContactUsButton from '@/components/navbar/ContactUsButton'
import logoSrc from '@/components/navbar/logo.png'
import { getText } from '@/utils/textUtils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
  {
    title: getText('page.home'),
    url: '/',
  },
  {
    title: getText('page.news'),
    url: '/news',
  },
  {
    title: getText('page.club'),
    url: '/history',
  },
  {
    title: getText('page.achievements'),
    url: '/achievements',
  },
  {
    title: getText('page.gallery'),
    url: '/gallery',
  },
  {
    title: getText('page.camps'),
    url: '/camps',
  },
  {
    title: getText('page.information'),
    url: '/information',
  },
]

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
      </div>

      <ContactUsButton />
    </div>
  )
}

export default Navbar
