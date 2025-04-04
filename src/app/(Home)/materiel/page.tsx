'use client'

import React, { useEffect, useState } from 'react'
import Title from '@/lib/components/typo/Title'

import Subtitle from '@/lib/components/typo/Subtitle'

export interface MaterialType {
  code: string
  serial: string
  model: string
  room: string
}

const Test: React.FC = (): React.JSX.Element => {
  const [material, setMaterial] = useState<MaterialType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchMat = async (): Promise<void> => {
      try {
        const res = await fetch('http://localhost:3001/material')
        if (!res.ok) {
          throw new Error('Network response not OK')
        }
        const data = await res.json()
        setMaterial(data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occured')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchMat()
  }, [])

  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }
  return (
    <>
      <section className='text-center'>
        <Title>Matériel</Title>
        <ul className='space-y-4 p-4'>
          {material.map((item: MaterialType, i: number) => (
            <li
              key={i}
              className='p-4 bg-white shadow-md rounded-lg text-gray-700'
            >
              <Subtitle>{item.serial}</Subtitle>
              <p>{item.model}</p>
              <p className='text-lg font-medium'>{item.room}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Test
