'use client'

import Image from 'next/image'

import React from 'react'

import NavLink from './nav/NavLink'
import Brand from './nav/Brand'
import Collapse from './nav/Collapse'
import { useStore } from '../../store/useStore'

const Navbar = (): React.JSX.Element => {
  const color = useStore((s) => s.color)
  return (
    <nav
      className={`bg-${color} text-white mx-auto flex items-center justify-between p-2 lg:px-3`}
      aria-label='Global'
    >
      <Brand href='/'>
        <Image width='64' height='64' src='/favicon.ico' alt='' />
        <span className='text-4xl text-shadow-lg uppercase'>
          Salle de recette
        </span>
      </Brand>
      <Collapse />

      <div className='hidden lg:flex lg:gap-x-12 lg:justify-end'>
        <NavLink href='/'>Accueil</NavLink>
        <NavLink href='/materiel'>Matériel</NavLink>
        <NavLink href='/bookings'>Réservations</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
