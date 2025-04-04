import React, { ReactNode } from 'react'

const Subtitle = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <h2 className='text-3xl mb-7 font-italic'>{children}</h2>
}

export default Subtitle
