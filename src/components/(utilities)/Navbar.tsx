"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='border-2 border-red-400 flex gap-16 py-4 mb-20 pr-2'>
    <Link href="/" className='mr-auto'>boredCrafts</Link>
    <Link href={`/preview/${pathname}`}>Preview</Link>
    <Link href={pathname}>Implementation</Link>
  </div>
  )
}

export default Navbar
