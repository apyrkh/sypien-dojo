import styles from './contactusbtn.module.css'

import React from 'react'
import Link from 'next/link'

const ContactUsButton = ({ color }) => {
  return (
    <Link
      href="/"
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      Contact us
    </Link>
  )
}

export default ContactUsButton
