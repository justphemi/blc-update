import React, { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const AddToCartButton = ({ productId, sizes, name }) => {
    const { addToCart } = useContext(ShopContext)
    const [showModal, setShowModal] = useState(false)
    const [selectedSize, setSelectedSize] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart.")
            return
        }
        addToCart(productId, selectedSize, quantity)
        setShowModal(false)
        setSelectedSize('')
        setQuantity(1)
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className='bg-black text-white px-4 py-2 text-sm active:bg-gray-700 cursor-pointer'>
                ADD TO CART
            </button>

            {showModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white p-8 rounded-md w-80'>
                        <h2 className='text-lg font-semibold mb-4'>Select Size for {name}</h2>
                        
                        <div className='flex flex-col gap-3'>
                            {sizes.map((size, index) => (
                                <button key={index} onClick={() => setSelectedSize(size)} className={`border cursor-pointer py-2 px-4 ${selectedSize === size ? 'bg-gray-200 border-black' : 'border-gray-200 bg-gray-100'}`}>
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div className='flex gap-3 my-4'>
                            <label>Quantity:</label>
                            <input 
                                type="number" 
                                min={1} 
                                value={quantity} 
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className='border py-1 px-2 w-20'
                            />
                        </div>

                        <div className='flex justify-end gap-4'>
                            <button onClick={() => setShowModal(false)} className='bg-gray-200 px-4 py-2'>Cancel</button>
                            <button onClick={handleAddToCart} className='bg-black text-white px-4 py-2'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddToCartButton
