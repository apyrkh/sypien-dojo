import styles from './colorbar.module.css'

import React from 'react'

const ColorBar = ({ color }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}></div>
  )
}

export default ColorBar
