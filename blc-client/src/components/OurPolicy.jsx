import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Smooth Processing</p>
            <p className='text-gray-400'>We guarantee hassle free processing for all your orders</p>
        </div>
      
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Return Policy</p>
            <p className='text-gray-400'>We provide 7 days return policy</p>
        </div>
      
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
            <p className='font-semibold'>Reliable Customer Support</p>
            <p className='text-gray-400'>Available 24/7 to attend to your issues</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
