'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Title from '../assets/components/typo/Title'
import { FaEye, FaRegEye } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'

import materialData from '@/app/assets/data/material'
import { FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6'
const ButtonGroup = ({ id }: { id: string }) => {
  const router = useRouter()
  const updateItem = () => router.push(`/material/${id}/update`)
  const readItem=() => router.push(`/material/${id}`)
  const deleteItem = () => alert(`${id} va être supprimé`)
  const buttons = [
    {title:"Modifier", action:updateItem,component:<FaRegPenToSquare />},
    {title:"Voir", action:readItem,component:<FaEye />},
    {title:"Effacer", action:deleteItem,component:<FaRegTrashCan/>},
  ]
  return (
    <div className='inline-flex items-center rounded-md shadow-sm'>{buttons.map(({title, action, component}) => (<button
        title={title} onClick={action} className='text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center'
      >{component}</button>))}
     </div>
  )
}

const Material = () => {
  const head = ['Code-Barres', 'N° de Série', 'Modèle', 'Salle']
  
  return (
    <>
      <section className='text-center'>
        <Title>Matériel</Title>
        <table className='table-auto border-collapse border-spacing-4 mx-auto'>
          <thead><tr>{head.map(val => <th key={val}>{val}</th>)}</tr></thead>
          <tbody>
            {materialData.map((item, i) => <tr key={i} className={i % 2 == 1 ? 'bg-slate-100' : ''}>{Object.values(item).map((val, v) => <td key={v}>{val}</td>)}<td><ButtonGroup id={item.serial} /></td></tr>)}

          </tbody>

          {/* {sample.map((item, i) => <div className='grid grid-cols-5 auto-cols-min' key={i}>{Object.values(item).map((val, v) => <div className={i==0?"font-semibold uppercase text-lg":"font-light"} key={v}>{val.length?val:"/"}</div>)}<div role="button"><FaRegEye /></div></div>)} */}
        </table>

      </section>
    </>
  )
}

export default Material
