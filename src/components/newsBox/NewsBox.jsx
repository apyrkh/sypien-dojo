import React from 'react'
import styles from './newsBox.module.css'
import Image from 'next/image'

const NewsBox = ({ img, title, desc, createdAt }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Image
            src={img}
            alt="cardPhoto"
            fill={true}
            className={styles.newsPhoto}
          />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{`${desc.slice(0, 80)}...`}</p>
          <p className={styles.createdAt}>Post date: {createdAt}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsBox
