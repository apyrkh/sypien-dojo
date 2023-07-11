import React from 'react'
import styles from './titleText.module.css'
import ColorBar from '@/components/colorBar/ColorBar'

const TitleText = ({ title, desc }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ColorBar />
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default TitleText
