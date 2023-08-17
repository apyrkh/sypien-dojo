'use client'
import styles from './button.module.css'

import React from 'react'

const Button = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Button
