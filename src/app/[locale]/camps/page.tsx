import React from 'react'
import styles from './page.module.css'
import CampCard from '@/app/[lang]/components/campCard/CampCard'
import { camps } from '@/constants/data'
import { getText } from '@/utils/textUtils'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'

export const metadata = {
  title: `${getText('home.meta.title')} | ${getText('page.camps')}`,
  description: getText('home.meta.description'),
}

const Camps = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const dict = await getDictionary(lang)
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{dict['camps'].title}</h1>
      <div className={styles.camps}>
        {camps.map((camp, index) => (
          <CampCard item={camp} key={index}></CampCard>
        ))}
      </div>
    </div>
  )
}

export default Camps
