import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const AddToCartModal = ({ product, closeModal }) => {
    const { addToCart, currency } = useContext(ShopContext)
    const [selectedSize, setSelectedSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        // Trigger the slide-in animation after the modal mounts
        setTimeout(() => setShowModal(true), 10)
    }, [])

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product._id, selectedSize, quantity)
            handleCloseModal()
        } else {
            // alert("Please select a size.")
            toast.error("Please select a size")
        }
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setTimeout(() => closeModal(), 300) // Match the transition duration
    }

    return (
        <div 
            className={`fixed inset-0 z-50 bg-none flex transition-opacity duration-300 ${
                isMobile ? 'items-end' : 'items-start justify-end'
            }`}
            onClick={handleCloseModal}
            style={{ opacity: showModal ? 1 : 0 }}
        >
            <div 
                className={`bg-white w-full max-w-md relative p-6 transition-all duration-300 ${
                    isMobile 
                        ? (showModal ? 'translate-y-0' : 'translate-y-full') 
                        : (showModal ? 'translate-x-0' : 'translate-x-full')
                } rounded-t-lg lg:rounded-l-lg lg:h-full lg:max-w-sm`}
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={assets.cross_icon} 
                    alt="close" 
                    className="absolute top-4 right-4 w-6 cursor-pointer" 
                    onClick={handleCloseModal} 
                />

                <h2 className="text-xl font-medium mb-4">{product.name}</h2>
                <p className="text-gray-500 mb-2">Price: {currency} {product.price.toLocaleString()}</p>

                <div className="mb-4">
                    <p className="font-medium">Size:</p>
                    <div className="flex gap-2 mt-2">
                        {product.sizes.map((size, index) => (
                            <button 
                                key={index} 
                                onClick={() => setSelectedSize(size)} 
                                className={`border cursor-pointer border-gray-200 py-2 px-4 bg-gray-100 ${selectedSize === size ? 'border-orange-500' : ''}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <p className="font-medium">Quantity:</p>
                    <input 
                        type="number" 
                        min="1" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>

                <button 
                    onClick={handleAddToCart} 
                    className="bg-black text-white px-6 py-3 w-full cursor-pointer"
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default AddToCartModal
