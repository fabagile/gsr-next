import React, { ReactNode } from 'react'

const Button = ({
  color,
  size = 'md',

  pd,
  children
}: {
  color: string
  size: string

  pd: number
  children: ReactNode
}): React.JSX.Element => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-100 text-${size} uppercase py-${pd} px-${pd * 1.5} rounded-${size} text-gray-100`}
    >
      {children}
    </button>
  )
}

export default Button
