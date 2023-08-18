import React from 'react'
import Image from 'next/image'
import styles from './userProfile.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Icon from '@/app/[lang]/components/icon/Icon'

function DropdownItem({ text, url }) {
  return (
    <li className={styles.dropdownItem}>
      <Icon icon="link-2" size={24} />
      <Link href={url}>{text}</Link>
    </li>
  )
}

const UserProfile = () => {
  const [open, setOpen] = useState(false)
  const { data: session, status } = useSession()
  return (
    <div className={styles.deskUser}>
      <div className={styles.menuContainer}>
        <div className={styles.menuTrigger} onClick={() => setOpen(!open)}>
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
            <div className={styles.deskFbUsername}>{session.user.name}</div>
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
  )
}

export default UserProfile
