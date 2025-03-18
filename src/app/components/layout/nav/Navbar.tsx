import Image from 'next/image'

import React, { ReactNode } from 'react'

import { MdOutlineLogin } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

import NavLink from './NavLink'
import Brand from './Brand'
import Collapse from './Collapse'

const Navbar = () => {
  interface LinkType { href: string, text: string }
  const links: LinkType[] = [
    { href: '/', text: 'Accueil' },
    { href: '/help', text: 'Aide' }
  ]
  return (
    <nav className='bg-sky-500 text-white mx-auto flex items-center justify-between p-2 lg:px-3' aria-label='Global'>
      <Brand href='/'>
        <Image width='64' height='64' src='/favicon.ico' alt='' />
        <span className='text-4xl text-shadow-lg'>Coopérative U</span>
        {/* <span className="sr-only">Coopérative U</span> */}
      </Brand>
      <Collapse />

      {/* {children} */}

      <div className='hidden lg:flex lg:gap-x-12 lg:justify-end'>

        <NavLink href='/'>Accueil</NavLink>
        <NavLink href='/material'>Matériel</NavLink>
        <NavLink href='/bookings'>Réservations</NavLink>
        {/* <NavLink href='/help'>Aide</NavLink> */}
        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a> */}
      </div>
      {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'> */}
        {/* <div className="py-auto"> */}
        {/* Connexion{" "} */}
        {/* <MdOutlineLogin /> */}

        {/* </div> */}
        {/* <CiLogin /> */}
        {/* <a href='https://accounts.google.com/login?hl=in' target='_blank' className='text-sm/6 font-semibold text-gray-900' rel='noreferrer'>Connexion<span aria-hidden='true'>&rarr;</span></a> */}
      {/* </div> */}
    </nav>
  )
}

export default Navbar
