import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>11D Circular Road Presidential Estate, <br /> PortHarcourt Nigeria</p>
          <p className='text-gray-500'>Tel: +234-703-127-8694 or +234-809-020-6642 <br /> Email: info@boncharly.com</p>
        </div>
        <img src={assets.asset13} className='w-full md:max-w-[480px]' alt='contact_src' />
      </div>
      <Newsletter />
    </div>
  )
}

export default Contact
