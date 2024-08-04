"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LumaCloneImplementation from '@/implementation/LumaCloneImplementation';

const LumaCloneCraft = () => {
  return (
    <div className='max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Luma Clone <span className="text-indigo-600">Component</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A reimagination of Luma&apos;s interactive design
      </p>
      <Link 
        href={"/preview/luma-clone"}
        className="block mb-16 transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <Image
          height={1000}
          width={1280}
          className='mx-auto rounded-lg shadow-lg'
          src={"/luma-clone/cover.png"}
          alt='Cover Preview Luma Clone'
        />
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <LumaCloneImplementation />
      </div>
    </div>
  );
};

export default LumaCloneCraft;