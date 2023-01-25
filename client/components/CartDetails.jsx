import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Cirrus from '../public/logos/payments/cirrus.svg'
import Maestro from '../public/logos/payments/maestro.svg'
import Mastercard from '../public/logos/payments/mastercard.svg'
import PayPal from '../public/logos/payments/paypal.svg'
import Sofort from '../public/logos/payments/sofort.svg'
import Visa from '../public/logos/payments/visa.svg'
import CartItemCard from './CartItemCard'
import ArrowLeft from '../public/icons/arrow-left--dark.svg'
import CartContext from '../contexts/CartContext';


export default function CartDetails () {
    const [cart, setCart] = useContext(CartContext);

    let total_cart_items = 0
    let total = 0
    let quantity = 0

    console.log(quantity)

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }

    const createCartItems = cart.map((cartItem) => {
        total_cart_items += cartItem.quantity
        console.log(cartItem)
        total += cartItem.quantity * cartItem.product.price       
        return <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            handleDeleteData={handleDeleteData}
        />
    });

    const displayEmptyCartMsg = 
            <div>
                <h1 className='text-4xl font-bold'>Your cart is empty</h1>
                <button>Keep shopping</button>
            </div>

    return (
        <div className="grid grid-cols-2 mt-20 ml-32">
            <div>
                <h1 className="font-bold text-4xl mt-5">Shopping Cart</h1>
                <Link href="/" className='flex items-center mt-5 -ml-4 cursor-pointer '>
                    <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48"/>
                    <p className='-ml-2 font-medium'>Keep Shopping</p>
                </Link>
                <div className='mt-5 divide-y'>
                    {createCartItems}
                </div>
            </div>
            <div className="bg-stone-100">
                <div className="grid grid-row-1 divide-y ml-20 max-w-[600px]">
                    <h1 className="font-bold text-4xl mb-10 mt-5">Order Summary</h1>
                    <div className='py-5'>
                        <button className='text-base'>+ Apply discount</button>
                        <form></form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td className="pt-5 font-medium">
                                    Subtotal <span>({total_cart_items} product{total_cart_items > 1 ? "s" : null})</span>
                                </td>
                                <td className='pt-5 font-medium text-right'>
                                    <span>$ {total}.00</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-base font-light pb-2'>Shipping Costs</td>
                                <td className='text-base font-light pb-2 text-right'>Free</td>
                            </tr>
                            <tr>
                                <td className='text-base font-light pb-2'>Taxes</td>
                                <td className='text-sm font-normal italic pb-2 text-right'>The total taxes will be calculated at checkout</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='text-base font-bold pb-10'>Total</td>
                                <td className='text-base font-bold pb-10 text-right'><span>$ {total}.00</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='items-center text-center mt-2'>
                        <button className='bg-black text-white rounded-full text-sm m-2 py-3 px-64'>Continue</button>
                    </div>
                    <div className='mt-16'>
                    <p className='text-sm text-neutral-500 mb-2'>Please note that if there is more than one item in your cart, the shipping time will always be determined by the product with the longest shipping time.</p>
                        <p className='text-sm font-semibold'>Need help?</p>
                        <div className='grid grid-cols-1 mt-2 mb-2'>
                            <a href="" className='text-sm text-neutral-500'>Can I return an item?</a>
                            <a href="" className='text-sm text-neutral-500'>Is my order secure?</a>
                            <a href="" className='text-sm text-neutral-500'>What payment methods are available?</a>
                        </div>
                        <p className='text-sm font-semibold mb-2'>Returns</p>
                        <p className='text-sm text-neutral-500 mb-2'>Discounts only apply as part of the bundle. Returning an item will result in the remaining items being charged in full. If, for any reason, you are not satisfied with your purchase, you have 14 days to return your items. <em className='font-bold'>Read our Return Policy</em></p>
                        <p className='text-sm font-semibold'>Accepted Payment Methods</p>
                        <div className="flex items-center space-x-1 mt-3">
                            <Image src={Cirrus} width="43" height="30" alt="Cirrus" />
                            <Image src={Maestro} width="43" height="30" alt="Maestro" />
                            <Image src={Mastercard} width="43" height="30" alt="Mastercard" />
                            <Image src={PayPal} width="43" height="30" alt="Paypal" />
                            <Image src={Sofort} width="43" height="30" alt="Sofort" />
                            <Image src={Visa} width="43" height="30" alt="Visa" />
                        </div>
                        <p className='text-sm font-normal mt-2'>Information about Purchases and Returns</p>
                    </div>
                </div>
            </div>
        </div>
    );

}