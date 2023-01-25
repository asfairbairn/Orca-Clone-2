import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Plus from '../public/icons/plus.svg'
import Minus from '../public/icons/minus.svg'


export default function CartItemCard({cartItem, handleDeleteData, updateCartItem}){
    const {quantity, size, product } = cartItem
    
    const handleRemove = (e) =>{
        e.preventDefault()
        fetch(`/api/cart_items/${cartItem.id}`,{
            method: 'PATCH',
            headers:  {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity - 1
            }),
          })   
        .then(res => res.json())
        .then(data => {
            updateCartItem({...cartItem, ...data})
        })
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        fetch(`/api/cart_items/${cartItem.id}`,{
            method: 'PATCH',
            headers:  {
              "Content-Type": "application/json",
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity + 1
            }),
          })   
        .then(res => res.json())
        .then(data => {
            updateCartItem({...cartItem, ...data})
        })
    }

    const handleDelete = (e) =>{
        fetch(`/api/cart_items/${cartItem.id}`,{
        method: 'DELETE'
        })
        .then((res) => {
            if (res.ok)
            handleDeleteData(cartItem.id)
        })
    }

    return (
        <div>
            <div className="flex pt-5">
                <Image src={product.image_address_front} alt={product.name} className="pb-5" width={300} height={400} />
                <div className='ml-5'>
                    <div className='flex justify-between'>
                        <Link href={`/products/${product.id}`}>
                            <p className='font-bold'>{product.name}</p>
                        </Link>
                        <p className='text-base pl-48'>$ {product.price}.00</p>
                    </div>
                    <div className='pt-5 pb-56'>
                        <p className='text-neutral-500'>Color: Black</p>
                        <p className='text-neutral-500'>Size: {size}</p>
                    </div>
                    <form className="border-2 w-32 items-center py-2 justify-center space-x-8 mb-2 flex" value={quantity}>
                        {quantity > 1 ? <Image src={Minus} alt="Minus" width="15" height="15" className="cursor-pointer" onClick={handleRemove} /> : <Image src={Minus} alt="Minus" width="15" height="15" />}
                            <div className='text-center'>
                                {quantity}
                            </div>
                        <Image src={Plus} alt="Plus" width="15" height="15" className="cursor-pointer" onClick={handleAdd} />
                    </form>
                    <button className="text-sm font-medium underline" value={cartItem.id} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}