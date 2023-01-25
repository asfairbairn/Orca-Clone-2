import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductFeature({ heading, category1, category2, category3 }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    const createProducts = products.slice(0,4).map((product) => <ProductCard key={product.name} product={product.id} image={product.image_address_front} name={product.name} description={product.brief_description} price={product.price}/>)

    return (
        <>
            <div className='text-center mt-10 mb-10'>
                <h2 className='font-bold text-3xl mb-5'>{heading}</h2>
                <button className='bg-gray-100 rounded-full text-sm m-2 py-2 px-4'>{category1}</button>
                <button className='bg-gray-100 rounded-full text-sm m-2 py-2 px-4'>{category2}</button>
                <button className='bg-gray-100 rounded-full text-sm m-2 py-2 px-4'>{category3}</button>
            </div>
            <div className='flex overflow-x-auto grid grid-cols-4 gap-4 mb-20 will-change-scroll scrollbar-hide'>
                {createProducts}
            </div>
        </>
    );
}