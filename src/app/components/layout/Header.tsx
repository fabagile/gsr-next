'use client'
import Image from 'next/image'
import { ReactNode } from 'react'
import Navbar from './nav/Navbar'
import Brand from './nav/Brand'
import NavLink from './nav/NavLink'
import Collapse from './nav/Collapse'
// import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-300'>
      <Navbar />

      {/* {links.map((link, i) => <NavLink key={i} href={link.href} >{link.text}</NavLink>)} */}
      {/* </Navbar> */}
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className='lg:hidden' role='dialog' aria-modal='true'>
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className='fixed inset-0 z-10' />
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              {/* <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
            </a>
            <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Close menu</span>
              <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true' data-slot='icon'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <div className='-mx-3'>
                  <button type='button' className='flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50' aria-controls='disclosure-1' aria-expanded='false'>
                    Product
                    {/* <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                    <svg className='size-5 flex-none' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' data-slot='icon'>
                      <path fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z' clip-rule='evenodd' />
                    </svg>
                  </button>
                  {/*  <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                  <div className='mt-2 space-y-2' id='disclosure-1'>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Analytics</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Engagement</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Security</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Integrations</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Automations</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Watch demo</a>
                    <a href='#' className='block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50'>Contact sales</a>
                  </div>
                </div>
                <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>Features</a>
                <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>Marketplace</a>
                <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>Company</a>
              </div>
              <div className='py-6'>
                <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
