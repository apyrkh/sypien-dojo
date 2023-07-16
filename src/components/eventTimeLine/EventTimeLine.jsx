import React from 'react'
import styles from './eventTimeLine.module.css'
import { eventDots } from '@/constants/data'

const EventTimeLine = ({ activeDot, onDotClick }) => {
  return (
    <div className={styles.verticalLine}>
      {eventDots.map((dot, index) => (
        <div
          key={index}
          className={`${styles.dot} ${
            activeDot === index ? `${styles.active}` : ``
          }`}
          onClick={() => onDotClick(index)}
        >
          <div className={styles.label}>
            <p>{dot.year}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventTimeLine
