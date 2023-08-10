'use client'
import React from 'react'
import Image from 'next/image'
import styles from './mainImage.module.css'
import { usePathname } from 'next/navigation'
import { mainImages } from '@/constants/data'

const MainImage = () => {
  const pathname = usePathname()
  console.log(pathname)
  console.log(mainImages[pathname])
  return (
    <>
      <Image
        src={mainImages[pathname]}
        alt="Title-Photo"
        fill={true}
        className={styles.mainPhoto}
      />
    </>
  )
}

export default MainImage
