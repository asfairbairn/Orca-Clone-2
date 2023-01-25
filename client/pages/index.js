import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import ProductFeature from '../components/ProductFeature'
import ProductCard from '../components/ProductCard'
import { Inter } from '@next/font/google'
import Carousel from '../components/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 return (
    <>
      <Head>
        <title>Orca Clone</title>
        <meta name="description" content="Orca Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Welcome to the (r)evolution" message="Welcome to a new era with a focus on pure performance. Discover our new range of wetsuits featuring optimized technology, built on our more than 25 years of experience and knowledge." />
      <div className='mx-48'>
        <div className='flex items-center justify-center m-auto w-4/6'>
          <p className='mt-10 text-center text-4xl font-bold mb-20'>At Orca, we are united by a deep love for the ocean and designing swimwear that helps build ultimate confidence in the water.</p>
        </div>
        <Carousel />
        <ProductFeature heading="New Surf range" category1="Men's" category2="Women's" category3="Children" />
      </div>
    </>
  )
}
