import React from 'react'
// import { CiMenuBurger } from 'react-icons/ci'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'

const Collapse = (): React.JSX.Element => (
  <div className='flex lg:hidden'>
    <button
      type='button'
      className='-m-2.5 inline-flex items-center justify-center rounded-md text-3xl p-2.5 text-gray-100'
    >
      <span className='sr-only'>Open main menu</span>
      {/* <CiMenuBurger /> */}
      <RxHamburgerMenu onClick={() => alert('cool')} />
      {/* <svg className='size-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true' data-slot='icon'>
      <path strokeLinecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
    </svg> */}
    </button>
  </div>
)

export default Collapse
