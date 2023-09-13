import React from 'react'
import styles from './newsBox.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NewsBox = ({ img, title, desc, createdAt, id }) => {
  return (
    <Link href={`/news/${id}`}>
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
            <p className={styles.desc}>
              {desc.length > 80 ? `${desc.slice(0, 80)}...` : desc}
            </p>
            <p className={styles.createdAt}>Post date: {createdAt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsBox
