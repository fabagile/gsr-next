'use client'

import { request } from 'http'
// import { useRouter } from 'next/router'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import materialData from '@/app/assets/data/material'
import Title from '@/app/assets/components/typo/Title'
import Subtitle from '@/app/assets/components/typo/Subtitle'


const MaterialItem = () => {
    // const navigator
    const { id } = useParams()

    const item = materialData.find(mat => mat.serial == id)
    const values = Object.values(item!)
    const titles = ["Code-Barres", "N° de Série", "Modèle", "Salle"]
    // const values = Object.values(item?).map()
    // const router = useRouter()
    // const {id}=request.
    return (<main className='w-90 mx-auto'>
        <Title>Fiche Matériel</Title>
        <Subtitle>{id}</Subtitle>

        <div className='grid-custom'>
            {values.map((value, i) => (<>
                <div className="font-semibold">{`${titles[i]}:`}</div>
                <div className="w-auto">{value ? value : "/"}</div>
            </>

            ))}
        </div>

    </main>
    )
}

export default MaterialItem
