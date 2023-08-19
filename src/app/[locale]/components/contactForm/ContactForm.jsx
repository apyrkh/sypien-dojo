import React from 'react'
import styles from './contactForm.module.css'
import { getText } from '@/utils/textUtils.js'
import Button from '@/app/[locale]/components/button/Button'

const placeholders = [
  {
    name: getText('form.name'),
  },
  {
    surname: getText('form.surname'),
  },
  {
    email: getText('form.email'),
  },
  {
    textArea: getText('form.textArea'),
  },
]

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Start your karate path!</h3>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholders[0].name}
        />
        <input
          className={styles.input}
          type="text"
          placeholder={placeholders[1].surname}
        />
        <input
          className={styles.input}
          type="text"
          placeholder={placeholders[2].email}
        />
        <textarea
          className={styles.textArea}
          placeholder={placeholders[3].textArea}
          rows={10}
        />
        <button>
          <Button color="red">Send!</Button>
        </button>
      </form>
    </div>
  )
}

export default ContactForm
