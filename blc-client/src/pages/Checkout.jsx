import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Checkout = () => {
  const [method, setMethod] = useState('pstack')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
        <div className='text-xl sm:test-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Second Name' />
        </div>

        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' />
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
        <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' />

        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' />
        </div>

      </div>  

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
        </div>

        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={() => setMethod('pstack')} className='flex items-center gap-3 border-gray-300 p-2 px-3 cursor-pointer'>
            <img className='w-20 mx-4' src={assets.pstack} alt='paystack_logo' />
            <p className={`min-w-3.5 h-3.5 border-gray-300 rounded-full ${method === 'pstack' ? 'bg-green-400' : ''}`}></p>
          </div>
          <div onClick={() => setMethod('fwave')} className='flex items-center gap-3 border-gray-300 p-2 px-3 cursor-pointer'>
            <img className='w-20 mx-4' src={assets.fwave} alt='paystack_logo' />
            <p className={`min-w-3.5 h-3.5 border-gray-300 rounded-full ${method === 'fwave' ? 'bg-green-400' : ''}`}></p>
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button onClick={() => navigate('/me/my-orders')} className='bg-black text-white px-12 cursor-pointer py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>    
    </div>
  )
}

export default Checkout
