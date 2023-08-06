'use client'
import React from 'react'
import styles from './blockLoader.module.css'
import { useLoader } from '@/context/LoaderContext.jsx'
import { Portal } from 'next/dist/client/portal'

const BlockLoader = () => {
  const { isLoading } = useLoader()
  if (!isLoading) return null
  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.overlay}>
          <div className={styles.content}>Loading...</div>
        </div>
      </div>
    </Portal>
  )
}

export default BlockLoader
