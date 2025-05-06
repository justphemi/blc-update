import React, { useState } from 'react'
import { createContext } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '₦'
    const delivery = 850
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = async (iId, size) => {
        if(!size){
            toast.error('Select a product size')
            return
        }

        let cartData = structuredClone(cartItems)

        if(cartData[iId]){
            if(cartData[iId][size]){
                cartData[iId][size] += 1
            }
        }else {
            cartData[iId] = {}
            cartData[iId][size] = 1
        }

        setCartItems(cartData)
        toast.success('Added to cart')
    }

    const getCartCount = () => {
        let total= 0;

        for(const i in cartItems){
            for(const j in cartItems[i]){
                try {
                    if(cartItems[i][j] > 0){
                        total += cartItems[i][j]
                    }
                } catch (error) {
                    console.log("Err: ", error)
                }
            }
        }
        return total
    }

    const updateCart = async (iId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[iId][size] = quantity

        setCartItems(cartData)
    }

    const getCartAmt = () => {
        let totalamt = 0

        for(const i in cartItems){
            let info = products.find((p) => p._id === i)
            for(const j in cartItems[i]){
                try{
                    if(cartItems[i][j] > 0){
                        totalamt += info.price * cartItems[i][j]
                    }
                }catch (e){
                    console.log("Cart total error: ", e)
                }
            }
        }

        return totalamt
    }
 
    const value = {
        products, currency, delivery, search, showSearch, cartItems, 
        addToCart, setShowSearch, getCartCount,  setSearch, 
        updateCart, getCartAmt, navigate,
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider