import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Boncharly" />
            <p className='w-full md:w-2/3 text-gray-600'>
                At Boncharly Les Creazion, we cater to various sports industries, including 
                professional, collegiate, and recreational markets.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
                <li>THE TEAM</li>
                <li>CONTACT</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS AND CONDITIONS</li>
             </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+234-703-127-8694</li>
                <li>+234-809-020-6642</li>
                <li>info@boncharly.com</li>
                <li>11D Circular Road, Presidential Estate</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />

        <p className='py-5 text-sm text-center'> Boncharly Les Creazion &copy; 2025 </p>
      </div>
    </div>
  )
}

export default Footer
