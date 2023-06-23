import styles from './button.module.css'

import React from 'react'

const Button = ({ height, width, text, color }) => {
  return (
    <div
      className={styles.container}
      style={{ height: height, width: width, backgroundColor: color }}
    >
      {text}
    </div>
  )
}

export default Button
