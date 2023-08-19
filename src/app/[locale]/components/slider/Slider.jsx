'use client'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './slider.css'
import Image from 'next/image'
import { sliderData } from '@/constants/data'
import Link from 'next/link'

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    rtl: false,
    slides: { perView: '2' },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {sliderData.map((photo, index) => (
        <div
          className="keen-slider__slide"
          style={{ maxWidth: 200, minWidth: 200 }}
          key={index}
        >
          <Link href="https://www.facebook.com/karateIchibanSypienDojo">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill={true}
              className={`number-slide${index}`}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Slider
