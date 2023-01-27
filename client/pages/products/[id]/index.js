import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import DropDown from '../../../components/DropDown';
import { useRouter } from 'next/router';
import Shipping from '../../../public/icons/shipping.svg'
import Benefits from '../../../public/icons/benefits.svg'
import CartContext from '../../../contexts/CartContext';
import UserContext from '../../../contexts/UserContext';

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("");
    const [_cart, setCart] = useContext(CartContext);
    const [user, _setUser] = useContext(UserContext)
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [id]);

    const handleClick = () => {
        fetch(`/api/cart_details/${user.cart_details_id}/cart_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                product_id: id,
                quantity: 1,
                size: size
            })
        })
            .then(res => res.json())
            .then(data => {
                setCart(items => [...items, data])

            })
    }

    const { name, image_address_front, image_address_back, image_address_insideout_front, image_address_insideout_back, description, price } = product

    return (
        <div className='w-screen grid grid-flow-col mt-20'>
            <div className='grid grid-cols-2 gap-2'>
                {image_address_front ? <Image src={image_address_front} width={1200} height={1200} alt={name} /> : null}
                {image_address_back ? <Image src={image_address_back} width={1200} height={1200} alt={name} /> : null}
                {image_address_insideout_front ? <Image src={image_address_insideout_front} width={1200} height={1200} alt={name} /> : null}
                {image_address_insideout_back ? <Image src={image_address_insideout_back} width={1200} height={1200} alt={name} /> : null}
            </div>
            <div className='max-w-[650px] pl-20 mr-48 mt-20 justify-center'>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <p className='text-base font-bold pt-5 pb-5'>$ {price}.00</p>
                <p className='text-sm font-normal mb-20'>{description}</p>
                <div className='grid grid-row-2 justify-center'>
                    <DropDown setSize={setSize} size={size} />
                    <div className='justify-center'>
                        {size === "" ? <button className='w-[570px] bg-neutral-500 rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5' disabled="true" onClick={handleClick} >Select size to add to cart</button> : <button className='w-[570px] bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5' onClick={handleClick} >+ Add to Cart</button>}
                        <p className='text-center text-sm font-normal'>Free shipping on orders over $100.00</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 divide-y pb-4'>
                    <p className='text-base font-medium pt-20 pb-4'>General Information</p>
                    <div className='flex items-center space-x-2 pb-5 pt-2'>
                        <Image src={Shipping} width={20} height={22} alt="shipping" />
                        <p className='text-base'>Shipping Information</p>
                    </div>
                    <div className='flex items-center space-x-2 pb-5 pt-2'>
                        <Image src={Benefits} width={18} height={18} alt="shipping" />
                        <p className='text-base'>Warranty Registration Benefits</p>
                    </div>
                </div>
            </div>
        </div>
    );
}