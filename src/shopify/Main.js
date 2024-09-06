import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import Help from './Help'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
export default function Main() {
  return (

    <BrowserRouter>
           <Nav/>
            <Routes>
            <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/help" element={<Help/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                
            </Routes>
        </BrowserRouter>
  
  )
}
