import React, { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className='text-5xl font-semibold mb-8'>{children}</h1>
  )
}

export default Title
