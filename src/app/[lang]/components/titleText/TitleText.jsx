'use client'
import React from 'react'
import styles from './titleText.module.css'
import { usePathname } from 'next/navigation'
import { pageTitles } from '@/constants/data'

const TitleText = () => {
  let path = usePathname()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{pageTitles[path]}</h1>
    </div>
  )
}

export default TitleText
