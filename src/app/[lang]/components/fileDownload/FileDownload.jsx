import React from 'react'
import styles from './fileDownload.module.css'
import Link from 'next/link'
import Icon from '../icon/Icon'

const FileDownload = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={item.link}>
        {item.title}
      </Link>
      <Link className={styles.download} href={item.link}>
        <Icon icon="download" size={30} animation="a-vibrate" />
      </Link>
    </div>
  )
}

export default FileDownload
