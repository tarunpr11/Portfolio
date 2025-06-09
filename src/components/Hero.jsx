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
            <a href='https://linkedin.com/in/tarun-parthiban-67927b253' target='_blank' rel='noopener noreferrer'>
              <img src='./images/linkedin.webp' alt='LinkedIn' className='w-10 h-10 inline-block transform transition-transform duration-300 hover:-translate-y-1' />
            </a>
            <a href='https://github.com/tarunpr11' target='_blank' rel='noopener noreferrer'>
              <img src='./images/github.webp' alt='GitHub' className='w-10 h-10 inline-block mx-10 transform transition-transform duration-300 hover:-translate-y-1' />
            </a>
            <a href='https://leetcode.com/u/jxJXPFN0cz/' target='_blank' rel='noopener noreferrer'>
              <img src='./images/leetcode.webp' alt='LeetCode' className='w-14 h-10 inline-block transform transition-transform duration-300 hover:-translate-y-1' />
            </a>
          </div>
          <p className='underline my-3'>
            <a href='https://drive.google.com/file/d/1HJvCwIQkmpXvdUNKh3EmAwSpJHxVO62o/view?usp=sharing' target='_blank'>Here's my resume</a>
          </p>

        </div>
        <div className='mx-0'>
          <CosmicAvatar />        
        </div>
    </div>
  )
}

export default Hero