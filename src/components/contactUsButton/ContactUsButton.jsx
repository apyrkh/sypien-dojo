import styles from './contactusbtn.module.css'

import React from 'react'

const ContactUsButton = ({ color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      Contact us
    </div>
  )
}

export default ContactUsButton
