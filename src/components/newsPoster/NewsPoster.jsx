import React from 'react'
import styles from './newsPoster.module.css'
import Image from 'next/image'
import ColorBar from '../colorBar/ColorBar'

const NewsPoster = ({ color, image, title, desc }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* <Image
        className={styles.poster}
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/321019538_575373247369039_6193953475628902575_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iU0oOdMetygAX8ydZbf&_nc_ht=scontent-waw1-1.xx&oh=00_AfCfG5d_Au_Ft7aCH8w6jyDQOtOuim5aez60704K-E3lvw&oe=64A5F86E"
        alt="newsCover"
        fill={true}
      /> */}
      {/* whats the best? background image or Image from next? */}
      <div className={styles.newsText}>
        <h3 className={styles.title}>{title}</h3>
        <ColorBar color={color} />
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  )
}

export default NewsPoster
