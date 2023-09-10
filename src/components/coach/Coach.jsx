import React from 'react'
import ColorBar from '../colorBar/ColorBar'
import styles from './coach.module.css'

const Coach = ({
  name,
  classification,
  titleDescription,
  titles,
  description,
  direction,
}) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: direction === 0 ? 'row-reverse' : 'row' }}
    >
      <div className={styles.background}>{/* photo */}</div>
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        {classification.map((item, index) => (
          <p className={styles.classification} key={index}>
            {item}
          </p>
        ))}
        <ColorBar />
        <p className={styles.desc}>{titleDescription}</p>
        <ul className={styles.titlesList}>
          {titles.map((title, index) => (
            <li key={index} className={styles.title}>
              {title}
            </li>
          ))}
        </ul>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  )
}

export default Coach
