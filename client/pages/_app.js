import React, { useEffect } from 'react'
import { CartProvider } from '../contexts/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}
