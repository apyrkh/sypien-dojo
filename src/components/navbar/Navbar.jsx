'use client'
import ContactUsButton from '@/components/navbar/ContactUsButton'
import { useSession, signIn, signOut } from 'next-auth/react'
import logoSrc from 'public/logo.png'
import { getText } from '@/utils/textUtils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import { links } from '@/constants/data'

const Navbar = () => {
  const { data: session, status } = useSession()
  console.log(session)
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.mainNavbar}>
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
        {session && (
          <>
            <b>{session.user.name}</b>
            <a
              href={`/api/auth/signout`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </a>
          </>
        )}
        {!session && (
          <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign in
          </a>
        )}
      </div>
      <div className={styles.burgerMenu}>
        <div
          className={styles.burgerMenuIcon}
          onClick={() => setToggleMenu(true)}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {toggleMenu && (
          <div className={styles.burgerMenuContainer}>
            <div className={styles.burgerLinks}>
              {links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className={styles.burgerLink}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div
              className={styles.burgerMenuCloseIcon}
              onClick={() => setToggleMenu(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513 14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z"
                  ></path>{' '}
                </g>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
