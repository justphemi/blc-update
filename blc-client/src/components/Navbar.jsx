import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visibleMenu, setVisibleMenu] = useState(false)
  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <div className='flex border-none items-center justify-between py-5 font-medium bg-white sticky top-0'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt='Boncharly Les Creazions' />
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p className='hover:text-[#ff9900]'>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p className='hover:text-[#ff9900]'>Collection</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p className='hover:text-[#ff9900]'>About</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/the-team' className='flex flex-col items-center gap-1'>
            <p className='hover:text-[#ff9900]'>The Team</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p className='hover:text-[#ff9900]'>Contact</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} alt='search icon' className='w-5 cursor-pointer' />

        <div className='group relative'>
          <Link to='/auth'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='user profile' />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 rounded-md bg-slate-200 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>My Account</p>
              <p className='cursor-pointer hover:text-black'>My Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart_icon' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center font-bold leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisibleMenu(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='menu icon' />
      </div>
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${visibleMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          <div onClick={() => setVisibleMenu(false)} className='flex items-center cursor-pointer gap-4 p-3'>
            <img src={assets.dropdown_icon} alt='dropdown menu' className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink className='py-2 pl-6 hover:text-[#ff9900]' onClick={() => setVisibleMenu(false)} to='/'>Home</NavLink>
          <NavLink className='py-2 pl-6 hover:text-[#ff9900]' onClick={() => setVisibleMenu(false)} to='/collection'>Collection</NavLink>
          <NavLink className='py-2 pl-6 hover:text-[#ff9900]' onClick={() => setVisibleMenu(false)} to='/about'>About</NavLink>
          <NavLink className='py-2 pl-6 hover:text-[#ff9900]' onClick={() => setVisibleMenu(false)} to='/the-team'>The Team</NavLink>
          <NavLink className='py-2 pl-6 hover:text-[#ff9900]' onClick={() => setVisibleMenu(false)} to='/contact'>Contact</NavLink>
        </div>
      </div>


    </div>
  )
}

export default Navbar
