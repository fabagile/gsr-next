'use client'
// import Image from 'next/image'
// import { ReactNode } from 'react'
// import Brand from './nav/Brand'
// import NavLink from './nav/NavLink'
// import Collapse from './nav/Collapse'
import Navbar from './Navbar'
// import React from 'react'

const Header = (): React.JSX.Element => {
  return (
    <header className='bg-slate-500'>
      <Navbar />
    </header>
  )
}

export default Header
