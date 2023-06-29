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
    slides: { perView: 'auto' },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {sliderData.map((photo, index) => (
        <Link
          className="keen-slider__slide"
          href="https://www.facebook.com/karateIchibanSypienDojo"
          key={index}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill={true}
            className="number-slide"
          />
        </Link>
      ))}
    </div>
  )
}

export default Slider