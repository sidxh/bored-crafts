import React, { useState } from 'react'
import {cn} from "@/lib/utils"
import { motion } from "framer-motion"
import date from 'date-and-time';
import { ArrowUpRight, Plus, Youtube } from 'lucide-react';
import Image from 'next/image';

const LumaClone = () => {
  const now = new Date();
  const todaysDate = date.format(now, 'hh:mm A [GMT]Z');
  return (
    <div className='border-2 border-black h-[100vh] bg-[#141414] text-white overflow-auto'>
      <div className='flex p-4 gap-4 text-sm items-center text-[#8B8B8B] cursor-pointer'>
        <div className='mr-auto'>
          <Image
            className='opacity-50 hover:opacity-100'
            alt='Luma Logo'
            src="/luma-clone/wordmark-light.png"
            width={50}
            height={50}
            />
          </div>
        <p className=''>{todaysDate}</p>
        <p className='flex items-center hover:text-white'>Explore Events <ArrowUpRight /></p>
        <button className='flex items-center bg-[#282828] rounded-2xl px-4 py-2 hover:text-black hover:bg-[#8B8B8B]'>Sign In</button>
      </div>

      <div className='flex items-center justify-between w-[50vw] mx-auto my-20 mb-4'>
        <div className='flex flex-col gap-6'>
          <Image
            className='rounded-xl'
            alt='Luma Logo'
            src="/luma-clone/nights-&-weekends.jpg"
            width={100}
            height={100}
            />
            <h1 className='text-3xl'>s5 master calendar.</h1>
        </div>
        <button className='flex items-center bg-[#808080] rounded-lg px-4 py-2 hover:bg-[#a2a2a2] text-sm'>Subscribe</button>
      </div>
      <hr className='border-1 border-gray-400 opacity-20'></hr>

      <div className='flex items-center w-[50vw] mx-auto my-4 gap-20'>
        <div className='w-[34vw]'>
          <div className='flex items-center w-full gap-2 mb-4'>
            <h1 className='mr-auto'>Events</h1>

          <button className='flex items-center gap-2 text-sm bg-[#282828] rounded-lg px-2 py-2 hover:text-black hover:bg-[#8B8B8B]'><Plus size={15} />Submit Event</button>

        <button className="flex items-center gap-2 text-sm bg-[#282828] rounded-lg px-2 py-2">
          <button>
            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M7.75 0h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26C1 4.225 1 5.328 1 6.695v2.11c0 1.368 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.116.9-.121 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.121-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981C10.275 0 9.172 0 7.805 0zM3.159 2.159c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103s2.437.002 3.192.103c.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v2c0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103s-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.756-.103-3.191v-2c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399M4.5 7.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></path></svg>
          </button>

          <button>
            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M2.2 3.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m0 11a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m1.2-6.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m2.8-6.5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0 5.5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 6.5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"></path></svg>
          </button>
        </button>

          <button className="flex items-center gap-2 text-sm bg-[#282828] rounded-lg px-2 py-2">
            <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0m-.965 5.096a6.5 6.5 0 1 1 1.06-1.06l2.935 2.934a.75.75 0 1 1-1.06 1.06z"></path></svg>
          </button>

          </div>

          <div className='mb-8 relative'>
            <hr className='flex h-[25vh] border-[1px] border-white absolute opacity-35'/>
            <h1 className='text-sm mx-4'>Today <span className='text-[#8B8B8B]'> Thursday</span></h1>
            <div className='bg-[#1D1D1D] m-4 mx-5 rounded-lg hover:border-[1px] hover:border-gray-500 p-4 px-5 flex justify-between'>
              <div>
                <p className='text-xs text-[#8B8B8B] mb-2'>10:30 AM</p>
                <h1 className='text-sm font-normal mb-2'>lab #1 -- decide on your idea.</h1>
                <p className='text-xs text-[#8B8B8B] mb-2'>By farza & stavan</p>
                <p className='text-xs text-[#8B8B8B] mb-2 flex items-center gap-1'><Youtube size={16} />YouTube</p>
              </div>
              <Image
                className='rounded-xl'
                alt='Luma Logo'
                src="/luma-clone/lab-ideas.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className='mb-8 relative'>
            <hr className='flex h-[25vh] border-[1px] border-white absolute opacity-35'/>
            <h1 className='text-sm mx-4'>June 25 <span className='text-[#8B8B8B]'> Tuesday</span></h1>
            <div className='bg-[#1D1D1D] m-4 mx-5 rounded-lg hover:border-[1px] hover:border-gray-500 p-4 px-5 flex justify-between'>
              <div>
                <p className='text-xs text-[#8B8B8B] mb-2'>10:30 AM</p>
                <h1 className='text-sm font-normal mb-2'>lecture #2 -- build a toy.</h1>
                <p className='text-xs text-[#8B8B8B] mb-2'>By farza & stavan</p>
                <p className='text-xs text-[#8B8B8B] mb-2 flex items-center gap-1'><Youtube size={16} />YouTube</p>
              </div>
              <Image
                className='rounded-xl'
                alt='Luma Logo'
                src="/luma-clone/lecture-build-a-toy.png"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className='mb-8 relative'>
            <hr className='flex h-[25vh] border-[1px] border-white absolute opacity-35'/>
            <h1 className='text-sm mx-4'>June 27 <span className='text-[#8B8B8B]'> Thursday</span></h1>
            <div className='bg-[#1D1D1D] m-4 mx-5 rounded-lg hover:border-[1px] hover:border-gray-500 p-4 px-5 flex justify-between'>
              <div>
                <p className='text-xs text-[#8B8B8B] mb-2'>10:30 AM</p>
                <h1 className='text-sm font-normal mb-2'>lab #2 -- plan it and build it.</h1>
                <p className='text-xs text-[#8B8B8B] mb-2'>By farza & stavan</p>
                <p className='text-xs text-[#8B8B8B] mb-2 flex items-center gap-1'><Youtube size={16} />YouTube</p>
              </div>
              <Image
                className='rounded-xl'
                alt='Luma Logo'
                src="/luma-clone/lab-build-a-toy.png"
                width={100}
                height={100}
              />
            </div>
          </div>

        </div>

        <div>
          Calendar
        </div>

      </div>

    </div>
  )
}

export default LumaClone
