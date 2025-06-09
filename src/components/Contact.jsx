import React from 'react'
import ContactBox from './ContactBox'
import Earth from './Globe'

const Contact = () => {
  return (
    <div
      className="text-white font-lexend font-normal px-6 pb-24 mt-10 mb-0 mx-10"
    >
      <div className="mx-14 py-3 mb-20">
        <p className="pb-3 text-4xl font-bold">Want to connect</p>
        <p className="pb-3 text-4xl font-bold">with me?</p>
        <div className="h-1 bg-[#88C0D0] w-32 mt-5"></div>
        <p className='my-8 text-2xl'>DM me through my social media links or... </p>
      </div>
      <div className="flex justify-evenly gap-10">
  <div className="w-1/2 mx-10">
    <ContactBox />
  </div>
  <div className="w-1/2">
    <Earth />
  </div>
</div>

    </div>
  )
}

export default Contact