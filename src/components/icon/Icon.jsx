import React from 'react'
import styles from './icon.module.css'
import Image from 'next/image'

const Icon = ({ icon, size }) => {
  const iconUrl = `/icons/${icon}.svg`
  return (
    <Image
      src={iconUrl}
      className={styles.icon}
      alt={icon}
      width={size}
      height={size}
    />
  )
}

export default Icon
