import React, { useEffect, useState } from 'react'
import { CartProvider } from '../contexts/CartContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} user={user} />
      <Footer />
    </CartProvider>
  )
}
