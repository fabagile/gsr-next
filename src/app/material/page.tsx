'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaEye } from 'react-icons/fa'

import { ItemType } from '@/lib/data/material'
import { FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6'
import Title from '@/lib/components/typo/Title'
import useMaterialStore from '@/lib/store/useMaterialStore'

const ButtonGroup = ({ id }: { id: string }): React.JSX.Element => {
  const router = useRouter()
  const updateItem = (): void => router.push(`/material/${id}/update`)
  const readItem = (): void => router.push(`/material/${id}`)
  const deleteItem = (): void => alert(`${id} va être supprimé`)
  const buttons = [
    { title: 'Voir', color: 'sky', action: readItem, component: <FaEye /> },
    {
      title: 'Modifier',
      color: 'amber',
      action: updateItem,
      component: <FaRegPenToSquare />
    },
    {
      title: 'Effacer',
      color: 'red',
      action: deleteItem,
      component: <FaRegTrashCan />
    }
  ]
  return (
    <div className='inline-flex items-center ml-2'>
      {buttons.map(({ title, color, action, component }) => (
        <button
          title={title}
          onClick={action}
          key={title}
          className={`text-slate-800 hover:text-blue-600 text-sm bg-${color} hover:bg-${color}-100 rounded-sm font-medium px-3 py-2 space-x-1`}
        >
          {component}
        </button>
      ))}
    </div>
  )
}

const Material = (): React.JSX.Element => {
  const head = ['Code-Barres', 'N° de Série', 'Modèle', 'Salle', 'Actions']
  const materialData: ItemType[] = useMaterialStore((s) => s.items)
  const getMaterial = (): ItemType[] => {
    return materialData
  }
  useEffect(() => {
    getMaterial()
  })

  return (
    <>
      <section className='text-center'>
        <Title>Matériel</Title>
        <table className='table-auto border-separate border-spacing-x-5 border-spacing-y-1 mx-auto'>
          <thead>
            <tr>
              {head.map((val) => (
                <th className='' key={val}>
                  {val}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {materialData.map((item, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-slate' : ''}>
                {Object.values(item).map((val, v) => (
                  <td className='' key={v}>
                    {val || '/'}
                  </td>
                ))}
                <td>
                  <ButtonGroup id={item.serial} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Material
