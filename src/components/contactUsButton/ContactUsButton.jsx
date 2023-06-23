import styles from './contactusbtn.module.css'

import React from 'react'

const ContactUsButton = ({ color }) => {
  return (
    <div
      className={styles.container}
      style={{ height: 40, width: 150, backgroundColor: color }}
    >
      Contact us
    </div>
  )
}

export default ContactUsButton
