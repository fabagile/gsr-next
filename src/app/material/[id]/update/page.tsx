'use client'
import { useParams } from 'next/navigation'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Title from '@/lib/components/typo/Title'
import Subtitle from '@/lib/components/typo/Subtitle'
import useMaterialStore from '@/lib/store/useMaterialStore'
import { ItemType } from '@/lib/data/material'

enum RoomEnum {
  fb10 = 'FB010',
  fb16 = 'FB016',
  fb20 = 'FB020',
  fb24 = 'FB024',
  fb26 = 'FB026',
  fb28 = 'FB028',
  fb30 = 'FB030',
}
interface FormInput {
  code: string
  serial: string
  model: string
  room: RoomEnum | string
}
const Update = (): React.JSX.Element => {
  const materialData: ItemType[] = useMaterialStore((s) => s.items)
  const updateMaterial = useMaterialStore((s) => s.update)

  const { id } = useParams()
  const [_, item] = [
    materialData.findIndex((mat) => mat.serial === id),
    materialData.find((mat) => mat.serial === id)
  ]

  const { register, handleSubmit } = useForm<FormInput>()
  const onsubmit: SubmitHandler<FormInput> = (data) => {
    const newData = {
      code: data?.code.length ? data?.code : item?.code,
      serial: data?.serial.length ? data?.serial : item?.serial,
      model: data?.model.length ? data?.model : item?.model,
      room: data?.room !== item?.room ? data.room : item?.room
    }
    updateMaterial(newData)
  }
  const rooms = [
    'FB010',
    'FB016',
    'FB020',
    'FB024',
    'FB026',
    'FB028',
    'FB030'
  ].filter((room) => room !== item?.room)

  return (
    <main className=''>
      <Title>Modification</Title>
      <Subtitle>
        {item?.model} - {id} - {item?.code}
      </Subtitle>
      <div className='w-auto mx-auto' />
      <form onSubmit={handleSubmit(onsubmit)} method='post'>
        <div className='w-full max-w-md grid grid-rows-5 gap-2 mx-auto '>
          <input
            className='placeholder-current bg-gray-100 rounded-md py-0 px-2'
            placeholder={item?.code}
            {...register('code')}
          />
          <input
            className='placeholder-current bg-gray-100 rounded-md py-0 px-2'
            placeholder={item?.serial}
            {...register('serial')}
          />
          <input
            className='placeholder-current bg-gray-100 rounded-md py-0 px-2'
            placeholder={item?.model}
            {...register('model')}
          />
          <select
            className='text-gray-500 bg-gray-100 rounded-md py-0 px-2'
            {...register('room')}
          >
            <option className='font-semibold'>{item?.room}</option>
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
          <button
            type='submit'
            className='bg-amber-500 text-lg uppercase py-2 px-3 rounded-xl text-gray-100'
          >
            Valider
          </button>
        </div>
      </form>
    </main>
  )
}

export default Update
