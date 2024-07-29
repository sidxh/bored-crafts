"use client"

import CouponRedemption from '@/components/(crafts)/CouponRedemption'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PreviewCouponRedemption = () => {
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
  const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <CouponRedemption expirationTime={expirationTime} />
    </div>
  );
}

export default PreviewCouponRedemption
