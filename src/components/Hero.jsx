import React from 'react'
import CosmicAvatar from './Character'

const Hero = () => {
  return (
    <div className="flex items-center"> 
        <div className='text-white font-lexend font-normal ml-36 pl-6 pb-24'>
          <div className='text-8xl py-5'>
            <p className='pb-3'>TARUN</p>
            <p>PARTHIBAN.</p>
          </div>
          <div className='h-1 bg-[#88C0D0] w-96'></div>
          <div className='text-2xl py-5'>
            <p>SOFTWARE DEVELOPER.</p>
            <p className='py-3'>ML ENGINEER.</p>
            <p>EMBEDDED SYSTEMS ENTHUSIAST.</p>
          </div>
          <div>
            <img src='./images/linkedin.webp' alt='LinkedIn' className='w-10 h-10 inline-block' />
            <img src='./images/github.webp' alt='LinkedIn' className='w-10 h-10 inline-block mx-10' />
            <img src='./images/leetcode.webp' alt='LinkedIn' className='w-14 h-10 inline-block' />
          </div>
          <p className='underline my-3'>
            <a href=''>Here's my resume</a>
          </p>

        </div>
        <div className='mx-0'>
          <CosmicAvatar />        
        </div>
    </div>
  )
}

export default Hero