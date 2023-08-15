'use client'
import React, { useState } from 'react'
import styles from './achievementsTimeLine.module.css'
import EventTimeLine from '@/components/eventTimeLine/EventTimeLine'
import { eventDots } from '@/constants/data'

const AchievementsTimeLine = () => {
  const [activeDot, setActiveDot] = useState(null)
  const [events, setEvents] = useState([])
  const handleDotClick = (dotIndex) => {
    setActiveDot(dotIndex)
    // You can use the dotIndex to fetch the events for the corresponding year from your data source
    // and update the events accordingly in your component state or retrieve them from an API.
    // For simplicity, we'll just log the selected year here.
    setEvents(eventDots[dotIndex].events)
  }
  return (
    <div className={styles.container}>
      <EventTimeLine
        className={styles.eventLine}
        activeDot={activeDot}
        onDotClick={handleDotClick}
      />
      <div className={styles.eventsContainer}>
        <ul className={styles.events}>
          {events.map((event, index) => (
            <li key={index} className={styles.event}>
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AchievementsTimeLine
