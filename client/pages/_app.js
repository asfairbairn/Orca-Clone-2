import React, { useEffect, useState } from 'react'
import { CartProvider } from '../contexts/CartContext'
import UserContext, { UserProvider } from '../contexts/UserContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </UserProvider>
  )
}
