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
          <Image
            src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/348869093_954863232211020_1462760187902663962_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BepitBOQ3UUAX8k82oc&_nc_ht=scontent-waw1-1.xx&oh=00_AfCPFEEatI-oQTeQ3pkZYwDUfDL0NrukT3v6Nnou1jqSDA&oe=649EB593"
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five c
            </div>
            <Button color={pageColor}>Get started</Button>
          </div>
        </div>
      </div>

      <section className="coach">
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
      </section>

      <section className="schedule">
        <div className={styles.scheduleContainer}>
          <h1>Schedule</h1>
          {/* what can we do here? */}
        </div>
      </section>

      <section className="instagram">
        <div className={styles.instagramContainer}>
          <h1>Instagram</h1>
          {/* slider with fetched data from insta */}
          <Button color={pageColor}>More photos</Button>
        </div>
      </section>
    </main>
  )
}
