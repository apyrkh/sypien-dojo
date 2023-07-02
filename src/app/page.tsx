import Button from '@/components/button/Button'
import styles from './page.module.css'
import Coach from '@/components/coach/Coach'
import Slider from '@/components/slider/Slider'
import Link from 'next/link'
import EmbedMap from '@/components/EmbedMap/EmbedMap'

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
      <section className="coach">
        <div className={styles.coachContainer}>
          <h1>Our coaches</h1>
          {coaches.map((coach, index) => (
            <Coach
              key={index}
              name={coach.name}
              description={coach.description}
              direction={index % 2}
              color={pageColor}
            />
          ))}
        </div>
      </section>

      <section id="schedule">
        <div className={styles.scheduleContainer}>
          <h1>Schedule</h1>
          {/* what can we do here? */}
        </div>
      </section>

      <section id="instagram">
        <div className={styles.instagramContainer}>
          <h1>Facebook</h1>
          <Slider />
          <Link href="https://www.facebook.com/karateIchibanSypienDojo">
            <Button color={pageColor}>More photos</Button>
          </Link>
        </div>
      </section>

      <section id="findus">
        <div className={styles.findUsContainer}>
          <h1>find us</h1>
          <EmbedMap />
        </div>
      </section>
    </main>
  )
}
