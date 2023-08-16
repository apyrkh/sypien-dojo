import React from 'react'
import styles from './page.module.css'
import AchievementsTimeLine from '@/components/achievementsTimeLine/AchievementsTimeLine'
import { getText } from '@/utils/textUtils'

export const metadata = {
  title: `${getText('home.meta.title')} | ${getText('page.achievements')}`,
  description: getText('home.meta.description'),
}

const Achievements = () => {
  return <AchievementsTimeLine />
}

export default Achievements
