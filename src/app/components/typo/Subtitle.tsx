import React, { ReactNode } from 'react'

const Subtitle = ({children}:{children:ReactNode}) => {
  return (
    <h2 className='size-3xl font-italic'>{children}</h2>
  )
}

export default Subtitle
