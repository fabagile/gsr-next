'use client'
import { useParams } from 'next/navigation'

import React, { FormEvent, useState } from 'react'
import {useForm} from "react-hook-form"

import materialData from '@/app/assets/data/material'
import Title from '@/app/assets/components/typo/Title'
import Subtitle from '@/app/assets/components/typo/Subtitle'
type formInputs={
  code: string
  serial: string
model:string
  room:string
}

const Update = () => {
  const {register, getValues} = useForm<formInputs>()
  
  const { id } = useParams()
  const item = materialData.find(mat => mat.serial == id)
  const values = Object.values(item!)
    const titles = ["Code-Barres", "N° de Série", "Modèle", "Salle"]
    const rooms=["FB010", "FB016" , "FB020", "FB024","FB026", "FB028", "FB030",]
    const [value, setValue]=useState("")

  return(
    <main className=''>
        <Title>Modification</Title>
        <Subtitle>{id}</Subtitle>
        <div className="grid grid-cols-2">
        <div className='grid-custom'>
            {values.map((value, i) => (<>
                <div className="font-semibold">{`${titles[i]}:`}</div>
                <div className="w-auto">{value ? value : "/"}</div>
            </>

            ))}
        </div>
        <form action="" method="post">
          <div>
            <input {...register("code")} />
          </div>
          <div>
          <input {...register("serial")} />
          </div>
          <div>
                      <input {...register("model")} />
          </div>
          <div>
            <select id="room"><option>Salle</option>
              {rooms.map((room) => (<option key={room} value={room} >{room}</option>))}
              </select>
          </div>
        </form>

        </div>


    </main>
  )
}

export default Update