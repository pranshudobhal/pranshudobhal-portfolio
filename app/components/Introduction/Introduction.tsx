'use client'

import Image from 'next/image'
import profilePhoto from './ProfilePhoto.jpg'
import { Icon } from '@iconify/react'

export const Introduction = () => {
  return (
    <section className='flex flex-col gap-12 sm:flex-row'>
      <div className='flex justify-center'>
        <Image
          src={profilePhoto}
          alt='Pranshu Dobhal'
          className='h-[175px] w-[175px] rounded-full object-cover'
        />
      </div>
      <div className='flex flex-col items-center justify-center sm:items-start'>
        <h1 className='text-5xl font-bold'>Pranshu Dobhal</h1>
        <p className='text-gray mt-1 text-lg font-bold'>
          Software Engineer Frontend at Tourlane
        </p>
        <div className='text-gray mt-8 flex gap-8 text-base'>
          <a
            href='https://twitter.com/pranshu_dobhal'
            className='flex items-center gap-2'
            target='_blank'
          >
            <Icon icon='skill-icons:twitter' />
            Twitter
          </a>
          <a
            href='https://github.com/pranshudobhal'
            className='flex items-center gap-2'
            target='_blank'
          >
            <Icon icon='skill-icons:github-light' />
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/pranshudobhal/'
            className='flex items-center gap-2'
            target='_blank'
          >
            <Icon icon='skill-icons:linkedin' />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
