import React from 'react'
import styles from './page.module.css'
import CampCard from '@/components/campCard/CampCard'
import { camps } from '@/constants/data'
import { getText } from '@/utils/textUtils'

export const metadata = {
  title: `${getText('home.meta.title')} | ${getText('page.camps')}`,
  description: getText('home.meta.description'),
}

const Camps = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{getText('camps.title')}</h1>
      <div className={styles.camps}>
        {camps.map((camp, index) => (
          <CampCard item={camp} key={index}></CampCard>
        ))}
      </div>
    </div>
  )
}

export default Camps
