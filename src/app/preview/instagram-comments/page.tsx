"use client"

import InstagramComments from '@/components/(crafts)/InstagramComments'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PreviewInstagramComments = () => {
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
    <InstagramComments />
  )
}

export default PreviewInstagramComments
