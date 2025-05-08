import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const SlideView = ({ images, id }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const swipeThreshold = 50 // Minimum swipe distance

    const nextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current

        if (distance > swipeThreshold) {
            nextImage()
        } else if (distance < -swipeThreshold) {
            prevImage()
        }
    }

    return (
        <div 
            className='relative overflow-hidden'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Link to={`/collection/product/${id}`}>
                <img 
                    src={images[currentIndex]} 
                    alt="product preview" 
                    className='hover:scale-110 transition ease-in-out w-full h-[220px]' 
                />
            </Link>

            {currentIndex > 0 && (
                <button 
                    onClick={prevImage} 
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-100 text-gray-300 p-1 z-5 cursor-pointer'
                >
                    ◀
                </button>
            )}
            
            {currentIndex < images.length - 1 && (
                <button 
                    onClick={nextImage} 
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-100 text-gray-300 p-1 z-5 cursor-pointer'
                >
                    ▶
                </button>
            )}
        </div>
    )
}

export default SlideView
