'use client'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { Collapse } from 'react-collapse'
import './campCard.css'
import FileDownload from '@/components/fileDownload/FileDownload'
import BlockLoaderContext from '@/context/context.js'
import BlockLoader from '@/components/blockLoader/BlockLoader'

const CampCard = ({ item }) => {
  const { show, setShow } = useContext(BlockLoaderContext)
  const [isOpened, setIsOpened] = useState(false)
  const handleClick = () => {
    setIsOpened((prev) => (prev = !prev))
  }

  return (
    <div className="container" onClick={() => setShow(true)}>
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
