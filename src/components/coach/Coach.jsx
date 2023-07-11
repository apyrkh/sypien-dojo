import React from 'react'
import ColorBar from '../colorBar/ColorBar'
import styles from './coach.module.css'

const Coach = ({ name, description, direction }) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: direction === 0 ? 'row-reverse' : 'row' }}
    >
      <div className={styles.background}>{/* photo */}</div>
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <ColorBar />
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  )
}

export default Coach
