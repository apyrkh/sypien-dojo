'use client'
import { getText } from '@/utils/textUtils'
import React from 'react'

const ContactUsButton = () => {
  return (
    <div className="">
      <button className="btn">{getText('btn.contact_us')}</button>
    </div>
  )
}

export default ContactUsButton
