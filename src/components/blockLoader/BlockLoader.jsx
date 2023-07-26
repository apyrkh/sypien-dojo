import React, { useContext } from 'react'
import styles from './blockLoader.module.css'
import BlockLoaderContext from '@/context/context.js'

const BlockLoader = () => {
  const { show, setShow } = useContext(BlockLoaderContext)
  if (!show) return null
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          loader
          {setTimeout(() => {
            setShow(false)
          }, 10000)}
        </div>
      </div>
    </div>
  )
}

export default BlockLoader
