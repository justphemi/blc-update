import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import FormatCurrency from './formatMoney'

const CartTotal = () => {

    const {delivery, currency, getCartAmt} = useContext(ShopContext)
    const totalamnt = getCartAmt() + delivery
  return (
    <div className='w-full'>
    <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
    </div>

    <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{FormatCurrency(getCartAmt())}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping fee</p>
            <p>{getCartAmt() === 0 ? `${currency} 0.00` :FormatCurrency(delivery)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{getCartAmt() === 0 ? `${currency} 0.00` : FormatCurrency(totalamnt)}</b>
        </div>
    </div>
    </div>
  )
}

export default CartTotal
