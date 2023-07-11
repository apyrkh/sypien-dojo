import styles from './page.module.css'
import { React } from 'react'
import HistoryCard from '@/components/historyCard/HistoryCard'

const historyCards = [
  {
    img: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349474915_2270524233147557_84063610244572263_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xv3E8aoWL2EAX-noHqx&_nc_ht=scontent-waw1-1.xx&oh=00_AfAoP8wKuN1p0G1CoHEOWhsxwkaAb9GL7d0OL_mqvGjfUg&oe=64A9B9BF',
    heading: 'CLUB HISTORY',
    desc: 'A. i S. Sypień powstał w 17 czerwca 2009 r., z inicjatywy Agnieszki Sypień. Najbardziej utytułowana zawodniczka karate kyokushin w Polsce i na Świecie, Zdobywczyni 7 medali z Mistrzostw Świata oraz 28 medali z Mistrzostw Europy.',
  },
  {
    img: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/349474915_2270524233147557_84063610244572263_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xv3E8aoWL2EAX-noHqx&_nc_ht=scontent-waw1-1.xx&oh=00_AfAoP8wKuN1p0G1CoHEOWhsxwkaAb9GL7d0OL_mqvGjfUg&oe=64A9B9BF',
    heading: "The members of the club's Board of Directors are:",
    desc: 'Agnieszka Sypień – Prezes klubu. Sylwester Sypień – Wiceprezes ds. szkoleniowych.Patryk Sypień – Wiceprezes ds. organizacyjnych. Początkowo treningi odbywały się w Centrum Sztuk Walki przy ul. Grabiszyńskiej 279, później przy ul. Tęczowej 57, obecnie od roku 2015 nasza siedziba znajduje się na terenie starej zajezdni tramwajowej przy ul. Legnickiej 65. Klub dysponuje salą do sportów walki – dojo oraz siłownią, a także zapleczem sanitarnym.',
  },
]

const pageColor = '#a42222'

const History = () => {
  return (
    <div className={styles.container}>
      {historyCards.map((card, index) => (
        <HistoryCard
          key={index}
          img={card.img}
          heading={card.heading}
          desc={card.desc}
          color={pageColor}
          direction={index % 2}
        />
      ))}
    </div>
  )
}

export default History
