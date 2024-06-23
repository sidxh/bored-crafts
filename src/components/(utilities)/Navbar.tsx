import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 border-red-400 flex gap-16 py-4 mb-20 pr-2'>
    <Link href="/" className='mr-auto'>boredCrafts</Link>
    <Link href="/">Preview</Link>
    <Link href="/">Implementation</Link>
  </div>
  )
}

export default Navbar
