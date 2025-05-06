import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../components/Newsletter'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p><strong className='text-lg'>Boncharly Les Creazion Limited</strong> is an emerging sports manufacturing and sales company with high leadership potential dedicated to designing, producing, and distributing high-quality sports equipment, apparel, and accessories. With a strong commitment to innovation, quality, and customer satisfaction, we cater to various sports industries, including professional, collegiate, and recreational markets.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To provide comfort for our customers by providing top-notch sports products that exceed their expectations as we foster partnerships with sports organizations, and promote healthy lifestyles through active participation.</p>
        </div>
        <img className='w-full md:max-w-[450px]' src={assets.asset16} alt='about_us' />
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border-none border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Best Quality</b>
          <p>We select and vet each product to ensure its nothing short of our standards</p>
        </div>
        <div className='border-none border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quick Delivery</b>
          <p>We'd always deliver your order to your location without delays.</p>
        </div>
        <div className='border-none border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Reliable Customer Support</b>
          <p>Our customer support is available 24/7 to attend to all your issues.</p>
        </div>
      </div>
      <Newsletter />
    </div>
  )
}

export default About
