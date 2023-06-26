import styles from './footer.module.css'
import React from 'react'

const Footer = ({ color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      Footer
    </div>
  )
}

export default Footer
