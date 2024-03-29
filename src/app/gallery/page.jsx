import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './page.module.css'
import GalleryComponent from '@/components/galleryComponent/GalleryComponent'
import { getText } from '@/utils/textUtils'

export const metadata = {
  title: `${getText('home.meta.title')} | ${getText('page.gallery')}`,
  description: getText('home.meta.description'),
}

const Gallery = () => {
  return <GalleryComponent />
}

export default Gallery
