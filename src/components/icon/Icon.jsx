import React from 'react'
import styles from './icon.module.css'
import Image from 'next/image'
import '@/app/animations.css'

const Icon = ({ icon, size, animation }) => {
  const iconUrl = `/icons/${icon}.svg`
  return (
    <Image
      src={iconUrl}
      className={`${styles.icon} ${animation}`}
      alt={icon}
      width={size}
      height={size}
    />
  )
}

export default Icon
