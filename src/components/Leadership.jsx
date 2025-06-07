import React from 'react'
import ExperienceTimeline from './Timeline'

const Leadership = () => {
  return (
    <div className="text-white font-lexend font-normal pl-6 pb-24 my-5">
      <div className="mx-14 py-5">
        <p className="pb-3 text-5xl font-bold">LEADERSHIP</p>
        <p className="pb-3 text-4xl font-bold">EXPERIENCE</p>
      </div>
      <div className="h-1 bg-[#88C0D0] w-48 mx-14"></div>
      <div className="relative z-10"><ExperienceTimeline /></div>
    </div>
  )
}

export default Leadership