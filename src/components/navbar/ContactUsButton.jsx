import { getText } from '@/utils/textUtils'
import styles from './contact-us-button.module.css'
import React from 'react'

const ContactUsButton = () => {
  return <div className={styles.container}>{getText('btn.contact_us')}</div>
}

export default ContactUsButton
