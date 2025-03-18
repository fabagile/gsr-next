// 'use client'

// import React, { useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

const Display = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  // const [color, setColor] = useState('slate-500')
  return (
    <>
      <Header />
      <main className='lg:w-5xl mx-auto my-5'>
        {children}

      </main>
      <Footer />
    </>

  )
}

export default Display
