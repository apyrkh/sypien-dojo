import React from 'react'
import styles from './titleText.module.css'
import ColorBar from '@/components/colorBar/ColorBar'

const TitleText = ({ title, desc, color }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ColorBar color={color} />
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default TitleText
