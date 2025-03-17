
import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavLink = ({ href, children }: { href: string, children: ReactNode }) => (
  <Link className='text-sm/6 font-semibold text-gray-100' href={href}>{children}
    {/* <span > */}
    {/* <span className="text-sm/6 font-semibold text-gray-900">{children}</span> */}
    {/* </span> */}
  </Link>
)

export default NavLink
