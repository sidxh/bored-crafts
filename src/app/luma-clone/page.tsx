// pages/CardsFlip/index.js
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import LumaCloneImplementation from '@/implementation/LumaCloneImplementation';
import LumaClonePreview from '@/preview/CardsFlipPreview';


const LumaCloneCraft = () => {
  const [activeTab, setActiveTab] = useState('preview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'implementation':
        return <LumaCloneImplementation />;
      case 'preview':
        return <LumaClonePreview />;
      default:
        return null;
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      <div className='border-2 border-red-400 flex gap-16 py-4 mb-20 pr-2'>
        <Link href="/" className='mr-auto'>boredCrafts</Link>
        <Link href="/luma-clone" onClick={() => setActiveTab('preview')}>Preview</Link>
        <Link href="/luma-clone" onClick={() => setActiveTab('implementation')}>Implementation</Link>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default LumaCloneCraft;