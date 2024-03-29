'use client'
import ContactUsButton from '@/components/navbar/ContactUsButton'
import { useSession, signIn, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import logoSrc from 'public/logo.png'
import { getText } from '@/utils/textUtils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import { links } from '@/constants/data'
import Icon from '@/components/icon/Icon'

function DropdownItem({ text, url }) {
  return (
    <li className={styles.dropdownItem}>
      <Icon icon="link-2" size={24} />
      <Link href={url}>{text}</Link>
    </li>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()
  const [toggleMenu, setToggleMenu] = useState(false)
  const pathname = usePathname()

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
            <Link
              key={link.url}
              href={link.url}
              className={
                link.url === pathname ? styles.currentPage : styles.link
              }
            >
              {link.title}
              <div
                style={
                  link.url === pathname
                    ? { display: 'flex' }
                    : { display: 'none' }
                }
                className={styles.line}
              />
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <ContactUsButton />

        {session && (
          <>
            <div className={styles.deskUser}>
              <div className={styles.menuContainer}>
                <div
                  className={styles.menuTrigger}
                  onClick={() => setOpen(!open)}
                >
                  <div className={styles.userPhoto}>
                    <Image
                      src={session.user.image}
                      alt={`Logged-in ${session.user.name}'s avatar.`}
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.dropdownMenu} ${
                    open ? styles.dropdownActive : styles.dropdownInactive
                  }`}
                >
                  <div className={styles.deskFbUsernameContainer}>
                    Signed in as
                    <div className={styles.deskFbUsername}>
                      {session.user.name}
                    </div>
                  </div>
                  <ul>
                    <DropdownItem text="Link1" url="#" />
                    <DropdownItem text="Link2" url="#" />
                    <li>
                      <a
                        href={`/api/auth/signout`}
                        className={styles.signOutBtn}
                        onClick={(e) => {
                          e.preventDefault()
                          signOut()
                        }}
                      >
                        <Icon icon="log-out" size={20} />
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {!session && pathname === '/admin' && (
          <a
            href={`/api/auth/signin`}
            className={styles.signInBtn}
            onClick={(e) => {
              e.preventDefault()
              signIn('facebook', { callbackUrl: '/admin#' })
            }}
          >
            <Icon icon="facebook" size={20} />
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
                  onClick={() => setToggleMenu(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {session && (
              <div className={styles.fbContainer}>
                <div className={styles.mobileUserContainer}>
                  <div className={styles.userPhoto}>
                    <Image
                      src={session.user.image}
                      alt={`${session.user.name}`}
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* <b>{session.user.name}</b> */}
                </div>
                <a
                  href={`/api/auth/signout`}
                  className={styles.signOutBtn}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  <Icon icon="log-out" size={20} />
                </a>
              </div>
            )}
            {!session && (
              <a
                href={`/api/auth/signin`}
                className={styles.signInBtn}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                <Icon icon="facebook" size={20} />
              </a>
            )}
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
