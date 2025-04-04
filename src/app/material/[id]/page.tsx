'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import { ItemType } from '@/lib/data/material'
import Title from '@/lib/components/typo/Title'

import useMaterialStore from '@/lib/store/useMaterialStore'
import Link from 'next/link'

const MaterialItem = (): React.JSX.Element => {
  const materialData: ItemType[] = useMaterialStore((s) => s.items)

  const { id } = useParams()

  const item = materialData.find((mat) => mat.serial === id)
  const values:any = Object.values(item!)
  const titles = ['Code-Barres', 'N° de Série', 'Modèle', 'Salle']
  return (
    <main className='mx-auto flex flex-col gap-5'>
      <Title>Fiche Matériel</Title>

      <div className='flex justify-center gap-2'>
        <div>
          {titles.map((title) => (
            <>
              <div key={title} className='text-right font-semibold '>
                {`${title}:`}
              </div>
            </>
          ))}
        </div>

        <div>
          {values.map((value:any, i:number) => (
            <>
              <div key={i} className=''>
                {value || '/'}
              </div>
            </>
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-1'>
        <button className='bg-blue-500 py-2 px-3 rounded-xl text-gray-100 inline'>
          <Link href='/material'>Retour</Link>
        </button>
        <button className='bg-amber-500 py-2 px-3 rounded-xl text-gray-100 inline'>
          <Link href={`/material/${id}/update`}>Modifier</Link>
        </button>
        <button className='bg-red-500 py-2 px-3 rounded-xl text-gray-100 inline'>
          Supprimer
        </button>
      </div>
    </main>
  )
}

export default MaterialItem
