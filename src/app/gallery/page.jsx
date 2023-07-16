import React from 'react'
import styles from './page.module.css'
import { galleryPhotos } from '@/constants/data'
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className={styles.container}>
      {galleryPhotos.map((photo, index) => (
        <div key={index} className={styles.photo}></div>
      ))}
    </div>
  )
}

export default Gallery
