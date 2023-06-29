'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { React, useContext } from 'react'
import styles from './themeToggle.module.css'

const ThemeToggle = ({ color }) => {
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🔆</div>
      <div className={styles.icon}>🌙</div>
      <div
        className={styles.ball}
        style={{
          backgroundColor: color,
          ...(mode === 'light' ? { right: '2px' } : { left: '2px' }),
        }}
      />
    </div>
  )
}

export default ThemeToggle
