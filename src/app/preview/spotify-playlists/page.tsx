"use client"

import SpotifyPlaylists from '@/components/(crafts)/SpotifyPlaylists'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PreviewSpotifyPlaylists = () => {
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
    <SpotifyPlaylists />
  )
}

export default PreviewSpotifyPlaylists
