'use client'
import Logo from 'public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import ContactUsButton from '@/components/contactUsButton/ContactUsButton'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'News',
    url: '/news',
  },
  {
    id: 3,
    title: 'Club History',
    url: '/history',
  },
  {
    id: 4,
    title: 'Achievements',
    url: '/achievements',
  },
  {
    id: 5,
    title: 'Gallery',
    url: '/gallery',
  },
  {
    id: 6,
    title: 'Camps',
    url: '/camps',
  },
  {
    id: 7,
    title: 'Information',
    url: '/information',
  },
]

const Navbar = ({ color }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image className={styles.img} src={Logo} alt="logo" fill={true} />
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <ThemeToggle color={color} />
      </div>
      <ContactUsButton color={color} />
    </div>
  )
}

export default Navbar
