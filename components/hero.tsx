import React from 'react'
import { MainLogin } from './ui/buttons'

const Hero = () => {
  return (
    <div className='mx-auto border rounded-lg p-10 mt-32'>
        <h1 className='text-4xl font-semibold text-center'>Login to use chat</h1>
        <div className="mt-8">
            <MainLogin/>
        </div>
    </div>
  )
}

export default Hero
