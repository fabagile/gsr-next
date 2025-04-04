import Link from 'next/link'
import React, { ReactNode } from 'react'

const Brand = ({ href, children }: { href: string, children: ReactNode }): React.JSX.Element => (
  <div className='flex lg:flex-1'>
    <Link href={href} className='-m-1.5 p-1.5'>
      <div className='flex justify-start gap-2 items-center'>{children}</div>
    </Link>
  </div>
)

export default Brand
