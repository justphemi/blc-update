import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const {products, currency, cartItems, updateCart, navigate} = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  // console.log(cartItems)
  
  useEffect(() => {
    const tempData = []

    for(const i in cartItems){
      for(const j in cartItems[i]){
        if(cartItems[i][j] > 0){
          tempData.push({
            _id: i,
            size: j,
            quantity: cartItems[i][j]
          })
        }
      }
    }

    setCartData(tempData)

  }, [cartItems])

  return (
    <div className='border-t pt-14 border-t-gray-300'>
      <div className='text-2xl mb-3'>
        <Title text1={'MY'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((i,index) => {
            console.log(i)
            const productData = products.find((p) => p._id === i._id )

            return (
              <div key={index} className='py-4 border-[0.1rem] border-none border-t-gray-400 border-b-gray-400 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="cart_img" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency} {productData.price.toLocaleString()}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate 50'>{i.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateCart(i._id, i.size, Number(e.target.value))} type="number" min={1} defaultValue={i.quantity} className='border-[0.1rem] max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                <img onClick={() => updateCart(i._id, i.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt='remove_item' />
              </div>
            )

          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/checkout')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>CHECKOUT</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
