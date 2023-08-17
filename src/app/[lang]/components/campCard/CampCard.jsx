'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import './campCard.css'
import FileDownload from '@/components/fileDownload/FileDownload'
// import { useLoader } from '@/context/LoaderContext.jsx'

const CampCard = ({ item }) => {
  // const { showLoader, hideLoader } = useLoader()
  const [isOpened, setIsOpened] = useState(false)
  const handleClick = () => {
    setIsOpened((prev) => (prev = !prev))
  }

  // uncomment to activate loader

  // const awakeLoader = () => {
  //   // Simulate some async operation
  //   showLoader()

  //   const timeoutId = setTimeout(() => {
  //     hideLoader()
  //   }, 5000)

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }
  return (
    <div className="container">
      <div className="imgContainer" onClick={handleClick}>
        <Image src={item.img} alt="CampPhoto" className="img" fill={true} />
      </div>
      <h2 className="heading">{item.heading}</h2>
      <Collapse isOpened={isOpened}>
        <div className="collapsed-content">
          <p className="description">{item.description}</p>
          <div className="files">
            {item.files.map((file, index) => (
              <FileDownload key={index} item={file} />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default CampCard
