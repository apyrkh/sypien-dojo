import React from 'react'
import styles from './page.module.css'
import CampCard from '@/components/campCard/CampCard'
import { camps } from '@/constants/data'
import { campsTitle } from '@/constants/data'

const Camps = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{campsTitle}</h1>
      <div className={styles.camps}>
        {camps.map((camp, index) => (
          <CampCard item={camp} key={index}></CampCard>
        ))}
      </div>
    </div>
  )
}

export default Camps
