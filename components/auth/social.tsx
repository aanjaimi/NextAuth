'use client';

import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '../ui/button';

const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
      size="lg"
      className='w-full'
      variant='outline'
      onClick={() => console.log('Google')}
      >
        <FcGoogle className='w-5 h-5'/>
      </Button>
      <Button
      size="lg"
      className='w-full'
      variant='outline'
      onClick={() => console.log('Github')}
      >
        <FaGithub className='w-5 h-5'/>
      </Button>
    </div>
  )
}

export default Social
