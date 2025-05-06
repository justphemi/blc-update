import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const TeamCard = ({name, position, img, linkedin, mail}) => {
  return (
    <div className='lg:flex md:flex items-center gap-5 px-3 py-3 rounded-lg hover:bg-gray-200 cursor-pointer'>
        <img src={img} className="w-[200px] h-[200px] rounded-lg" alt="" />

        <div className='flex flex-col gap-0 py-3 text-left'>
            <p className='text-gray-900 text-3xl sm:py-2'>{name}</p>
            <p className='text-gray-500 text-xl'> {position}</p>

            <div className='flex gap-4 p-2 left-auto right-0 top-0'>
                <a href={linkedin} target='_blank'>
                    <img src={assets.linkedin} className='w-7 h-7' alt='linkedin' />
                </a>
                <a href={`mailto:${mail}`} target='_blank'>
                    <img src={assets.mail} className='w-7 h-7' alt='mail' />
                </a>
            </div>
        </div>

    </div>
  )
}

export default TeamCard