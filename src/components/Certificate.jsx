import React from 'react'

const Certificate = ({ Src, Name, Description }) => {
  return (
    <div className='flex justify-center mx-5'>
        <img src={Src} alt="Certificate" className='w-1/2 h-1/2 shadow-lg' />
        <div className='flex flex-col justify-center px-10 w-96 text-white font-semibold bg-opacity-30 bg-white rounded-r-xl'>
            <p className='text-4xl my-5 font-bold'>{Name}</p>
            <p className='text-md'>{Description}</p>
        </div>
    </div>
  )
}

export default Certificate