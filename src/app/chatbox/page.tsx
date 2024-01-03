// pages/dropdown/index.js
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import DropdownImplementation from '@/implementation/DropdownImplementation';
import DropdownPreview from '@/preview/DropdownPreview';


const DropdownCraft = () => {
  const [activeTab, setActiveTab] = useState('implementation');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'implementation':
        return <DropdownImplementation />;
      case 'preview':
        return <DropdownPreview />;
      default:
        return null;
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      <div className='border-2 border-red-400 flex gap-16 py-4 mb-20 pr-2'>
        <Link href="/" className='mr-auto'>back2crafts</Link>
        <Link href="/dropdown" onClick={() => setActiveTab('implementation')}>Implementation</Link>
        <Link href="/dropdown" onClick={() => setActiveTab('preview')}>Preview</Link>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default DropdownCraft;