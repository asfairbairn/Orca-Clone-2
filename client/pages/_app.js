import React, { useEffect, useState } from 'react'
import { CartProvider } from '../contexts/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {r.json().then((data) => {
        setUser(data)});
      }});
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} user={user} />
      <Footer />
    </CartProvider>
  )
}
