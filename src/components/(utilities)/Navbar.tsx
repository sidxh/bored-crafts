"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='border-0 border-red-400 py-4 mb-20 pr-2'>
      <div className='max-w-4xl mx-auto flex items-center justify-between'>
        <Link href="/" className='text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors'>
          boredCrafts
        </Link>

        <div className='hidden sm:flex gap-8'>
          <Link 
            href={`/preview/${pathname}`}
            className='text-gray-600 hover:text-indigo-600 transition-colors'
          >
            Preview
          </Link>
          <Link 
            href={pathname}
            className='text-gray-600 hover:text-indigo-600 transition-colors'
          >
            Implementation
          </Link>
        </div>

        <button 
          className='sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className='sm:hidden mt-4 flex flex-col items-center gap-4'>
          <Link 
            href={`/preview/${pathname}`}
            className='text-gray-600 hover:text-indigo-600 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Preview
          </Link>
          <Link 
            href={pathname}
            className='text-gray-600 hover:text-indigo-600 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Implementation
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar