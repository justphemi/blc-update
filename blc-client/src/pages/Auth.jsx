import React, { useState } from 'react'

const Auth = () => {

  const [current, setCurrent] = useState('Sign Up')

  const onSubmitHandle = (e) => {
    e.preventDefault()

  }

  return (
    <form onSubmit={onSubmitHandle} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{current}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />  
      </div>      
      {current === 'Sign In' ? ' ' : <input type="text" className='w-full px-3 py-2 border border-b-gray-500' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-b-gray-500' placeholder='Email address' required/>
      <input type="password" className='w-full px-3 py-2 border border-b-gray-500' placeholder='Password' required/>
    
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password?</p>
        {
          current === 'Sign In' ? <p onClick={() => setCurrent('Sign Up')} className='cursor-pointer'>Sign Up</p> :  <p onClick={() => setCurrent('Sign In')} className='cursor-pointer'>Sign In</p>
        }
      </div>

        <button type='submit' className='bg-black cursor-pointer text-white font-light px-8 py-2 mt-4'>{current === 'Sign In' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Auth
