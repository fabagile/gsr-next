'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import { ItemType } from '@/lib/data/material'
import Title from '@/lib/components/typo/Title'

import useMaterialStore from '@/lib/store/useMaterialStore'
import Link from 'next/link'

import { rootName } from '../root'
import Button from '@/lib/components/ui/Button'

const MaterialItem = () => {
  const materialData: ItemType[] = useMaterialStore((s) => s.items)

  const { serial } = useParams()

  const item = materialData.find((mat) => mat.serial === serial)
  const values:any = Object.values(item!)
  const titles = ['Code-Barres', 'N° de Série', 'Modèle', 'Salle']

  return (
    <main className='mx-auto flex flex-col gap-5'>
      <Title>Fiche Matériel</Title>

      <div className='flex justify-center gap-2'>
        <div>
          {titles.map((title) => (
            <div key={title} className='text-right font-semibold '>
              {`${title}:`}
            </div>
          ))}
        </div>

        <div>
          {values.map((value:any, i:number) => (
            <div key={i} className=''>
              {value || '/'}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-1'>
        <Button color='blue' size='lg' pd={2}>
          <div className='inline-flex'>
            <Link href={rootName}>Retour</Link>
          </div>
        </Button>
        <Button color='amber' size='lg' pd={2}>
          <div className='inline-flex'>
            <Link href={`${rootName}/${serial}/update`}>Modifier</Link>
          </div>
        </Button>
        <Button color='red' size='lg' pd={2}>
          <div className='inline-flex'>Supprimer</div>
        </Button>
      </div>
    </main>
  )
}

export default MaterialItem
