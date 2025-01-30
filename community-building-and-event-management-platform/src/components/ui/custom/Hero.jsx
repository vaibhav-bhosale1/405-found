import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        <span className='text-[#F7F4F3]'>YOUR CAMPUS, YOUR COMMUNITY – CONNECT & ENGAGE TODAY!</span>
        </h1>
        <p className='text-gray-400 font-semibold'>Your personal trip planner,Don't wait plan instantly</p>
       
        <Link href={'/dashboard'}> 
       <Button>Get Started,Its free</Button>
       </Link> 
    </div>
  )
}

export default Hero
