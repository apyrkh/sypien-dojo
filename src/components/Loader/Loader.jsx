import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}>
        <div className={styles.content}>loader</div>
      </div>
    </div>
  )
}

const LoaderPortal = () => {
  return ReactDOM.createPortal(<Loader />, document.body)
}

export default LoaderPortal
