import React from 'react'

const Newsletter = () => {
    const onSubmitHandle = (e) => {
        e.preventDefault()

    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe to get a discount</p>
      <p className='text-gray-400 mt-3'>Subscribe to our email list to get notified of our discount sales</p>
    
      <form onSubmit={onSubmitHandle} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Your email address' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
