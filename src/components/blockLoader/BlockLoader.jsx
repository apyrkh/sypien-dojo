'use client'
import React from 'react'
import styles from './blockLoader.module.css'
import { useLoader } from '@/context/LoaderContext.jsx'
import { createPortal } from 'react-dom'
// import { Portal } from 'next/dist/client/portal'

const BlockLoader = () => {
  const { isLoading } = useLoader()
  if (!isLoading) return null
  console.log(isLoading, document.body)
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>loader</div>
      </div>
    </div>,
    document.body
  )
}

export default BlockLoader
