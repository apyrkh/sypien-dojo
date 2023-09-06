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
    classification: [
      '5 Dan',
      'Trener Klasy I Karate',
      'Instruktor fitness, specjalista ds. dietetyki',
    ],
    titleDescription:
      'Jedna z najbardziej utytułowanych polskich zawodniczek karate kyokushin na Świecie:',
    titles: [
      '3 krotna mistrzyni Świata',
      '14 krotna mistrzyni Europy',
      'mistrzyni obu Ameryk',
      'zdobywczyni pucharu Europy, Rosji i Polski',
      'wielokrotna mistrzyni Polski.',
    ],
    description:
      'Kilkunastokrotna laureatka plebiscytu na ”Najlepszego Sportowca Dolnego Śląska” Organizowanego przez Słowo Sportowe i Gazetę Wrocławską. W 2005 roku wybrana przez czytelników i kapitułę Najlepszym Sportowcem Dolnego Śląska.',
  },
  {
    name: 'Sensei Sylwester Sypien',
    classification: [
      'IV Dan',
      'Trener Klasy I Karate',
      'Wielokrotny laureat plebiscytu na ”Najlepszego Trenera Dolnego Śląska Słowa Sportowego”',
    ],
    titleDescription:
      'Jedna z najbardziej utytułowanych polskich zawodniczek karate kyokushin na Świecie:',
    titles: [
      'Wielokrotny mistrz Europy obu Ameryk, Polski',
      'Mistrz świata kategorii masters',
    ],
    description:
      'Przez ten czas jego zawodnicy zdobywali wielokrotnie tytuł drużynowego Mistrza Polski, Pucharu Polski, Makroregionu Dolnośląskiego. Największym trenerskim osiągnięciem było zajęcie I i II miejsca w Mistrzostwach Europy Open Karate Kyokushin w Sosnowcu w 2015 roku.',
  },
  {
    name: 'Sensei Patryk Sypien',
    classification: [
      'III Dan',
      'Instruktor Sportu Wychowany na matach treningowych',
    ],
    titleDescription:
      'Najlepszy zawodnik klubu Ichiban Sypień Dojo. Jego Osiągnięcia to:',
    titles: [
      '2 krotny Mistrz Europy',
      '5 krotny Mistrz Polski Open',
      '5 krotny Mistrzostw Polski Wagowych',
    ],
    description:
      'Syn najbardziej utytułowanego małżeństwa w Świecie karate. Uczestnik wielu prestiżowych szkoleń i obozów , swoją wiedzą i doświadczeniem dzieli się z podopiecznymi klubu. ',
  },
]

export default function Home() {
  const { showLoader, hideLoader } = useLoader()

  useEffect(() => {
    // Simulate some async operation
    showLoader()

    const timeoutId = setTimeout(() => {
      hideLoader()
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
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
              classification={coach.classification}
              titleDescription={coach.titleDescription}
              titles={coach.titles}
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
