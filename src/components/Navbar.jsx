import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-20'>
        <div> 
            <img src="/images/Avatar.webp" alt="Avatar" width={45} height={45} />
        </div>
        <div className='flex items-center justify-evenly gap-28 bg-[#D9D9D9]/30 text-white rounded-full px-10 py-4 font-lexend font-normal text-lg'>
          <div>About Me</div>
          <div>Projects</div>
          <div>Certifications</div>
          <div className='text-[#88C0D0]'>Contact Me</div>
        </div>
    </div>
  )
}

export default Navbar