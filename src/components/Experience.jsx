import React from 'react'
import WorkTimeline from './WorkTimeline'

const Experience = () => {
  return (
    <div className="text-white font-lexend font-normal pl-6 pb-24 my-5">
      <div className="mx-14 py-5">
        <p className="pb-3 text-5xl font-bold">WORK</p>
        <p className="pb-3 text-4xl font-bold">EXPERIENCE</p>
      </div>
      <div className="h-1 bg-[#88C0D0] w-48 mx-14"></div>
      <div className="relative z-10"><WorkTimeline /></div>
    </div>
  )
}

export default Experience