'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useStore } from '@/app/assets/store/useStore'

const Footer = () => {
  const color = useStore(s => s.color)
  return (
    <footer className={`bg-${color}`} />

  )
}

export default Footer
