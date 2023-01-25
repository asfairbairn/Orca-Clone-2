import React from 'react';
import Image from "next/image"
import Link from 'next/link';

export default function ProductCard({image, name, description, price, product }) {

    return (
        <div className="px-10 relative min-w-[500px] min-h-[750px]">
            <Link href={`/products/${product}`}>
                <Image src={image} alt={name} className="max-h-1000 max-w-750" width={750} height={1000} />
                <h2 className="mt-5 mb-2 text-md font-bold">{name}</h2>
                <p className='text-sm mb-4'>{description}</p>
                <h4 className="font-medium mt-2">${price}</h4>
            </Link>
        </div>
    );
}