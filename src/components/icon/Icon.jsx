import React from 'react'

const Icon = ({ icon, size }) => {
  const iconUrl = `/icons/${icon}.svg`
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <use href={iconUrl} />
    </svg>
  )
}

export default Icon
