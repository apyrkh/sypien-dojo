import styles from './button.module.css'

import React from 'react'

const Button = ({ color, children }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </div>
  )
}

export default Button
