import Subtitle from '@/lib/components/typo/Subtitle'
import { MaterialType } from './types'
// import getData from '@/lib/helpers/getData'
// import Title from '@/lib/components/typo/Title'
// import fetchWOstore from '@/lib/helpers/optimizeCache'
// import React from 'react'

export default async function Material (): Promise<React.JSX.Element> {
  // import React from 'react'

  // export default async function Users  ()  {
  // const response  = await fetch('http://localhost:3001/material',{cache:"no-store"})

  const res = await fetch('http://localhost:3001/material')
  const material: MaterialType[] = await res.json()
  return (
    <>

      {/* <Title>Matériel</Title> */}
      <ul className='w-full w-sm-max'>
        {material.map((item: MaterialType, k: number) => (
          <li key={k} className='grid grid-cols-2'>

            <Subtitle>{item.serial}</Subtitle>
            <p>{item.model}
              <br /><i>{item.room}</i>
              <br /><em>{item.code}</em>
            </p>

          </li>
        ))}
      </ul>

    </>
  )
}

// export default Material
