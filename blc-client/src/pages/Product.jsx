import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  const {productId} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [ quantity,setQuantity] = useState(0)

  // const fetchProduct = async () => {
  //   products.map((t) => {
  //     if(t._id === productId){
  //       setProductData(t)
  //       setProductData(t)
  //       setImage(t.image[0])
  //       // console.log(t)
  //       return null
  //     }
  //   })
  // }

  const fetchProduct = async () => {
    const found = products.find((t) => t._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  };

  useEffect(() => {
    fetchProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);
  

  return productData ? (
    <div className='pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((i, index) => (
                <img onClick={() => setImage(i)} src={i} key={index} className='w-[24%] sm:w-full sm:mb-3 flex flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='lg:w-[450px] lg:h-[550px]' alt="full_view" />
          </div>
        </div>  

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3.5' alt="star_rating" />
            <img src={assets.star_icon} className='w-3.5' alt="star_rating" />
            <img src={assets.star_icon} className='w-3.5' alt="star_rating" />
            <img src={assets.star_icon} className='w-3.5' alt="star_rating" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="star_rating" />
          </div>
          <p className='mt-5 text-3xl font-medium'> <strong>{currency}</strong> {productData.price.toLocaleString()}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          {/* <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((i, index) => (
                  <button onClick={() => setSize(i)} key={index} className={`border cursor-pointer border-gray-200 py-2 px-4 bg-gray-100 ${i === size ? 'border-orange-500' : ''}`} >{i}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
           */}

          <div className="flex flex-col gap-4 my-8">
              <p>Select size</p>
              <div className="flex gap-2">
                  {productData.sizes.map((i, index) => (
                      <button 
                          onClick={() => setSize(i)} 
                          key={index} 
                          className={`border cursor-pointer border-gray-200 py-2 px-4 bg-gray-100 ${i === size ? 'border-orange-500' : ''}`}
                      >
                          {i}
                      </button>
                  ))}
              </div>
          </div>

          <div className="flex gap-4">
              <input 
                  type="number" 
                  min="1" 
                  defaultValue="1" 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 sm:w-2/4 p-2"
              />
              <button 
                  onClick={() => addToCart(productData._id, size, quantity)} 
                  className="bg-black text-white px-8 py-3 sm:w-2/4 text-sm active:bg-gray-700 cursor-pointer"
              >
                  ADD TO CART
              </button>
          </div>


          <hr className='mt-8 sm:w-4/5 border-gray-300 bg-gray-200'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Return available within 14 days</p>
          </div>
        </div>
      </div>  

      <div className='mt-20'>
        <div className='flex'>
          <b className='border cursor-pointer border-gray-100 px-5 py-3 text-sm'>Description</b>
          <p className='border cursor-pointer border-gray-100 px-5 py-3 text-sm'>Reviews (12)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-100 px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce store for very good sport wears</p>
          <p>Just a store to get very good sport wears</p>
        </div>
      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
