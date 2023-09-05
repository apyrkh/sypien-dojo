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
      'V Dan Trener Klasy I Karate Instruktor fitness, specjalista ds. dietetyki. Jedna z najbardziej utytułowanych polskich zawodniczek karate kyokushin na Świecie: -3 krotna mistrzyni Świata -14 krotna mistrzyni Europy – mistrzyni obu Ameryk – zdobywczyni pucharu Europy, Rosji i Polski. – wielokrotna mistrzyni Polski. Kilkunastokrotna laureatka plebiscytu na ”Najlepszego Sportowca Dolnego Śląska” Organizowanego przez Słowo Sportowe i Gazetę Wrocławską. W 2005 roku wybrana przez czytelników i kapitułę Najlepszym Sportowcem Dolnego Śląska. Założycielka klubu i obecnie Prezes Wrocławskiego Klubu Karate Kyokushin- A i S Sypień, który powstał w 2009 roku. Wraz z mężem Sylwestrem prowadzi treningi dla grup przedszkolnych , szkolnych, młodzieży, dorosłych i kadry zawodniczej. Do sukcesów trenerskich sensei Agnieszki należą medale podopiecznych na zawodach rangi mistrzostw Europy, pucharu Europy, Polski, a także turniejach ogólno-polskich najmłodszych adeptów klubu .',
  },
  {
    name: 'Sensei Sylwester Sypien',
    description:
      'IV dan Trener Klasy I Karate Wielokrotny laureat plebiscytu na ”Najlepszego Trenera Dolnego Śląska Słowa Sportowego”, posiadacz brązowej odznaki Ministra Sportu i Turystyki ” Za Zasługi Dla Sportu” trener Kadry Narodowej Karate Kyokushin IKO . Wielokrotny mistrz Europy, obu Ameryk, Polski, mistrz świata kategorii masters. Trener Wrocławskiego Klubu Karate A i S Sypień od 2009 roku. Przez ten czas jego zawodnicy zdobywali wielokrotnie tytuł drużynowego Mistrza Polski, Pucharu Polski, Makroregionu Dolnośląskiego. Największym trenerskim osiągnięciem było zajęcie I i II miejsca w Mistrzostwach Europy Open Karate Kyokushin w Sosnowcu w 2015 roku.',
  },
  {
    name: 'Sensei Patryk Sypien',
    description:
      'III Dan Instruktor Sportu Wychowany na matach treningowych. Syn najbardziej utytułowanego małżeństwa w Świecie karate. Uczestnik wielu prestiżowych szkoleń i obozów , swoją wiedzą i doświadczeniem dzieli się z podopiecznymi klubu. Uwielbia towarzyszyć młodszym podopiecznym na zawodach w roli sekundanta, potrafi zmobilizować ich do przezwyciężania własnych słabości. W życiu codziennym oaza spokoju, a na zawodach prawdziwy wojownik. Obecnie to najlepszy zawodnik klubu Ichiban Sypień Dojo. Jego Osiągnięcia to: 2 krotny Mistrz Europy. 5 krotny Mistrz Polski Open. 5 krotny Mistrzostw Polski Wagowych',
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
