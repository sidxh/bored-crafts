// pages/CardsFlip/index.js
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import LumaCloneImplementation from '@/implementation/LumaCloneImplementation';

const LumaCloneCraft = () => {

  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      Check the <Link href={"/preview/luma-clone"}>LumaPreview</Link> here
      <LumaCloneImplementation />
    </div>
  );
};

export default LumaCloneCraft;