import React from 'react'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Team from './pages/Team' 

import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  return (
    <div className='bg-red px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <div className='sticky border-none top-0 z-999 bg-white'>
        <Navbar />
      </div>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/my-orders' element={<Orders />} />
        <Route path='/the-team' element={<Team />} />
      </Routes>
      
      
      <Footer />
    </div>
    
  )
}

export default App