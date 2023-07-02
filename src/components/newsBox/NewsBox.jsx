import React from 'react'
import styles from './newsBox.module.css'

const NewsBox = ({ color, title, desc }) => {
  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.title} style={{ color: color }}>
          {title}
        </h3>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default NewsBox
