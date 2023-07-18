'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import './campCard.css'

const CampCard = ({ item }) => {
  const [isOpened, setIsOpened] = useState(false)
  const handleClick = () => {
    setIsOpened((prev) => (prev = !prev))
  }
  return (
    <div className="container">
      <div className="imgContainer" onClick={handleClick}>
        <Image src={item.img} alt="CampPhoto" className="img" fill={true} />
      </div>
      <h2 className="heading">{item.heading}</h2>
      <Collapse isOpened={isOpened}>
        <div className="collapsed-content">{item.description}</div>
      </Collapse>
    </div>
  )
}

export default CampCard
