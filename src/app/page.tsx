import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import ColorBar from '@/components/colorBar/ColorBar'
import Button from '@/components/button/Button'
import styles from './page.module.css'
import Coach from '@/components/coach/Coach'

const coaches = [
  {
    name: 'Shihan Agnieszka Sypien',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c",
  },
  {
    name: 'Sensei Sylwester Sypien',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c",
  },
]

const pageColor = '#E31B1B'

export default function Home() {
  return (
    <main className={styles.aMain}>
      <Navbar color={pageColor} />
      <div className={styles.welcomeContainer}>
        <div className={styles.imgContainer}>
          <Image src="/" alt="photo" fill={true} className={styles.mainPhoto} />
        </div>
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
      <div className={styles.coachContainer}>
        <h1 className={styles.title}>Our coaches</h1>
        {coaches.map((coach, index) => (
          <Coach
            key={index}
            name={coach.name}
            description={coach.description}
            direction={index % 2}
          />
        ))}
      </div>
    </main>
  )
}
