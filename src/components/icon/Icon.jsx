import React from 'react'
import styles from './icon.module.css'
import '@/app/animations.css'

const Icon = ({ icon, size, animation, color }) => {
  return (
    <svg
      className={`${styles.icon} ${animation}`}
      width={size}
      height={size}
      stroke={color}
    >
      <use href={`/icons/feather-sprite.svg#${icon}`} />
    </svg>
  )
}

export default Icon
