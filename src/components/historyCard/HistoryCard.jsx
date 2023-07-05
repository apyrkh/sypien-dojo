import React from 'react'
import styles from './historyCard.module.css'
import Image from 'next/image'

const HistoryCard = ({ img, heading, desc, direction, color }) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: direction === 0 ? 'row-reverse' : 'row' }}
    >
      <div className={styles.photoContainer}>
        <Image
          src={img}
          className={styles.img}
          fill={true}
          alt="SypienFamily"
        />
      </div>
      <div className={styles.desc}>
        <h3 className={styles.heading} style={{ color: color }}>
          {heading}
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default HistoryCard
