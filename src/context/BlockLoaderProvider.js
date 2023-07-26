'use client'

import { useState } from 'react'
import BlockLoaderContext from './context'

const BlockLoaderProvider = ({ children }) => {
  const [show, setShow] = useState(false)

  return (
    <BlockLoaderContext.Provider value={{ show, setShow }}>
      {children}
    </BlockLoaderContext.Provider>
  )
}

export default BlockLoaderProvider
