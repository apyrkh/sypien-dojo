import React from 'react'
import styles from './embedMap.module.css'
import ContactForm from '../contactForm/ContactForm'

const EmbedMap = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10015.637489225679!2d16.9885445421755!3d51.128579681858234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc20e34ba6113%3A0xa6337e34e6d479e9!2sWroclaw%20Kyokushin%20Karate%20Club!5e0!3m2!1sru!2spl!4v1687990484078!5m2!1sru!2spl"
        className={styles.map}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactForm />
    </div>
  )
}

export default EmbedMap
