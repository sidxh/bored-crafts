"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='border-0 border-red-400 py-4 mb-20'>
      <div className='max-w-4xl mx-auto flex items-center justify-between px-4'>
        <Link href="/" className='text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors'>
          bored<span className='text-indigo-600'>crafts</span>
        </Link>

        <div className='hidden sm:flex gap-8'>
          <Link 
            href={`/preview/${pathname}`}
            className='text-gray-600 hover:text-indigo-600 transition-colors text-lg'
          >
            0review
          </Link>
          <Link 
            href={pathname}
            className='text-gray-600 hover:text-indigo-600 transition-colors text-lg'
          >
            implementation
          </Link>
        </div>

        <button 
          className='sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='sm:hidden mt-4 bg-white shadow-lg rounded-md overflow-hidden'
          >
            <div className='flex flex-col'>
              <Link 
                href={`/preview/${pathname}`}
                className='text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors text-lg py-3 px-4'
                onClick={() => setIsMenuOpen(false)}
              >
                preview
              </Link>
              <Link 
                href={pathname}
                className='text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors text-lg py-3 px-4'
                onClick={() => setIsMenuOpen(false)}
              >
                implementation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar