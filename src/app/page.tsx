'use client'
import Button from '@/components/button/Button'
import styles from './page.module.css'
import Coach from '@/components/coach/Coach'
import Slider from '@/components/slider/Slider'
import Link from 'next/link'
import EmbedMap from '@/components/EmbedMap/EmbedMap'
import Image from 'next/image'
import { useLoader } from '@/context/LoaderContext'
import { useEffect } from 'react'

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

export default function Home() {
  const { setIsLoading } = useLoader()

  useEffect(() => {
    // Simulate some async operation
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <main className={styles.aMain}>
      <section className="news">
        <div className={styles.newsContainer}>
          <h1 className={`u-text-italic ${styles.heading}`}>
            Important news{' '}
            <span className={styles.newsSmallText}>
              <Link href="/news">see all news -&gt;</Link>
            </span>
          </h1>
          <div className={styles.newsCards}>
            <div className={styles.newsMainCard}>
              <Image
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C"
                fill={true}
                alt="newsPhoto"
                className={styles.MainCard}
              ></Image>
            </div>
            <div className={styles.newsSmallCards}>
              <div className={styles.SmallCard}>
                <Image
                  src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C"
                  fill={true}
                  alt="newsPhoto"
                  className={styles.SmallCardImg}
                ></Image>
              </div>
              <div className={styles.SmallCard}>
                <Image
                  src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C"
                  fill={true}
                  alt="newsPhoto"
                  className={styles.SmallCardImg}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events">
        <div className={styles.eventContainer}>
          <h1 className={`u-text-italic ${styles.heading}`}>Upcoming events</h1>
          <div className={styles.eventCards}>
            <div className={styles.mainEventCard}>
              <Image
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349298515_990978428579842_2940259476220223937_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bSDgRqwS_bYAX-dCkDY&_nc_ht=scontent-waw1-1.xx&oh=00_AfCwqkjSW8i3uvonKP3v8jB8-K7WdEGxsYRcNdUv6Febmg&oe=64ADEE6C"
                alt="MainEvent"
                fill={true}
                className={styles.mainEventImg}
              />
            </div>
            <div className={styles.eventsCalendar}></div>
          </div>
        </div>
      </section>
      <section className="coach">
        <div className={styles.coachContainer}>
          <h1>Our coaches</h1>
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
            <Button>More photos</Button>
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
