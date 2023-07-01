import { getText } from '@/utils/textUtils'
import styles from './contact-us-button.module.css'
import React from 'react'

const ContactUsButton = ({ color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {getText('btn.contact_us')}
    </div>
  )
}

export default ContactUsButton
