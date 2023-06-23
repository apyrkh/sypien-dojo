import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import ColorBar from '@/components/colorBar/ColorBar'
import Button from '@/components/button/Button'
import styles from './page.module.css'

export default function Home() {
  const pageColor = '#E31B1B'

  return (
    <main className={styles.aMain}>
      <Navbar color={pageColor} />
      <div className={styles.imgContainer}>
        <Image src="/" alt="photo" fill={true} className={styles.mainPhoto} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          <h3>train with the</h3>
          <h1>BEST</h1>
        </div>
        <ColorBar color={pageColor} />
        <div className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five c
        </div>
        <Button height={40} width={150} text="get started" color={pageColor} />
      </div>
    </main>
  )
}
