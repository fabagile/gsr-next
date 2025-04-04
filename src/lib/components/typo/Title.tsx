import React, { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return <h1 className='text-5xl font-semibold mb-8'>{children}</h1>
}

export default Title
