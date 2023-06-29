import { React } from 'react'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import ColorBar from '@/components/colorBar/ColorBar'
import Button from '@/components/button/Button'

const pageColor = '#E3AB1B'

const News = () => {
  return (
    <div className={styles.welcomeContainer}>
      <Navbar color={pageColor} />
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.discordapp.com/attachments/770716316688580660/1121082663042809908/image.png"
          alt="photo"
          fill={true}
          className={styles.mainPhoto}
        />
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <h2>train with the</h2>
            <h1>BEST</h1>
          </div>
          <ColorBar color={pageColor} />
          <div className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five c
          </div>
          <Button color={pageColor}>Get started</Button>
        </div>
      </div>
    </div>
  )
}

export default News
