'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import { galleryPhotos } from '@/constants/data'
import Image from 'next/image'

const Gallery = () => {
  const [activePanel, setActivePanel] = useState(0)
  const handleClick = (index) => {
    setActivePanel((prev) => {
      if (prev === index) {
        setActivePanel(null)
      } else {
        setActivePanel(index)
      }
    })
  }

  return (
    <div className={styles.container}>
      {galleryPhotos.map((photoSection, index) => (
        <div key={index} className={styles.photoSection}>
          <h3
            className={styles.sectionTitle}
            onClick={() => handleClick(index)}
          >
            {photoSection.title}
          </h3>
          <div
            className={
              index === activePanel ? styles.photoContainer : styles.hidden
            }
          >
            {photoSection.photos.map((photo, index) => (
              <div key={index} className={styles.photo}>
                {/* photo here */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
