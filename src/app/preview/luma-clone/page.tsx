"use client"

import LumaClone from '@/components/(crafts)/LumaClone'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PreviewLumaClone = () => {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.back()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [router])
  return (
    <LumaClone />
  )
}

export default PreviewLumaClone
