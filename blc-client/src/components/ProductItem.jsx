import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import SlideView from './SlideView'
import AddToCartModal from './AddtoCartModel'

const ProductItem = ({ id, image, name, price, sizes }) => {
    const { currency } = useContext(ShopContext)
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='flex flex-col'>
            <div className="text-gray-700 cursor-pointer">
                <div className="overflow-hidden">
                    <SlideView images={image} id={id} />
                </div>
                <Link to={`/collection/product/${id}`}>
                  <p className="pt-3 pb-1 text-md">{name}</p>
                </Link>
            </div>

          <div className='w-full flex flex-col p-1'>
            <Link to={`/collection/product/${id}`}>
              <p className="font-medium text-sm"><strong>{currency} {price.toLocaleString()}</strong></p>
            </Link>
            <button 
                onClick={() => setShowModal(true)} 
                className="bg-orange-600 text-white text-sm py-1 px-0 w-3/5 cursor-pointer hover:bg-black"
            >
                Add to Cart
            </button>
          </div>

            {showModal && <AddToCartModal product={{ _id: id, name, price, sizes: sizes || [] }} closeModal={() => setShowModal(false)} />}
        </div>
    )
}

export default ProductItem
