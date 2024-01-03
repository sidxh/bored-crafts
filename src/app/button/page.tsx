// pages/button/index.js
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import ButtonImplementation from '@/implementation/ButtonImplementation';
import ButtonPreview from '@/preview/ButtonPreview';


const ButtonCraft = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'implementation':
        return <ButtonImplementation />;
      case 'preview':
        return <ButtonPreview />;
      default:
        return null;
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      <div className='border-2 border-red-400 flex gap-16 py-4 mb-20 pr-2'>
        <Link href="/" className='mr-auto'>back2crafts</Link>
        <Link href="/button" onClick={() => setActiveTab('implementation')}>Implementation</Link>
        <Link href="/button" onClick={() => setActiveTab('preview')}>Preview</Link>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default ButtonCraft;