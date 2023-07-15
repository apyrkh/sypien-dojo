import styles from './page.module.css'
import { React } from 'react'
import HistoryCard from '@/components/historyCard/HistoryCard'
import { historyCards } from '@/constants/data'

const History = () => {
  return (
    <div className={styles.container}>
      {historyCards.map((card, index) => (
        <HistoryCard
          key={index}
          img={card.img}
          heading={card.title}
          desc={card.text}
          direction={index % 2}
        />
      ))}
    </div>
  )
}

export default History
