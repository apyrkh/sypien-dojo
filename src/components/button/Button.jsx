import styles from './button.module.css';

import React from 'react'

const Button = ( { height, width, text } ) => {
  return (
    <div className={styles.container} style={{ height: height, width: width }}>
        {text}
    </div>
  )
}

export default Button