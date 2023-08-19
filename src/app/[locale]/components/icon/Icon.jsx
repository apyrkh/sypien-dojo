import React from 'react'
import styles from './icon.module.css'
import '@/app/[locale]/animations.css'

const Icon = ({ icon, size, animation }) => {
  return (
    <svg className={`${styles.icon} ${animation}`} width={size} height={size}>
      <use href={`/icons/feather-sprite.svg#${icon}`} />
    </svg>
  )
}

export default Icon
