import React from 'react'
import styles from './titleText.module.css'

const TitleText = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default TitleText
