// components/ButtonPreview.js
import Button from '@/components/Button';
import React from 'react';

const ButtonPreview = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='primary' rounded='small'>Test Button</Button>
        <Button className='bg-blue-500' size='medium' appearance='primary' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='primary' rounded='large'>Test Button</Button>
      </div>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='solid' rounded='small'>Test Button</Button>
        <Button size='medium' appearance='solid' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='solid' rounded='large'>Test Button</Button>
      </div>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='outline' rounded='small'>Test Button</Button>
        <Button size='medium' appearance='outline' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='outline' rounded='large'>Test Button</Button>
      </div>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='success' rounded='small'>Test Button</Button>
        <Button size='medium' appearance='success' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='success' rounded='large'>Test Button</Button>
      </div>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='link' rounded='small'>Test Button</Button>
        <Button size='medium' appearance='link' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='link' rounded='large'>Test Button</Button>
      </div>
      <div className='flex items-center justify-center gap-20 border-2 border-red-500 mb-20'>
        <Button size='small' appearance='danger' rounded='small'>Test Button</Button>
        <Button size='medium' appearance='danger' rounded='medium'>Test Button</Button>
        <Button size='large' appearance='danger' rounded='large'>Test Button</Button>
      </div>
    </div>
  );
};

export default ButtonPreview;
