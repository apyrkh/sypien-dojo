import React from 'react'
import styles from './icon.module.css'

const Icon = ({ icon, size }) => {
  const iconUrl = `/icons/${icon}.svg`
  return (
    <img
      src={iconUrl}
      className={styles.icon}
      alt={icon}
      style={{ width: size, height: size }}
    />
  )
}

export default Icon
