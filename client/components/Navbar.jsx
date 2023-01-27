import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router"
import CartContext from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/orca--light.svg";
import LogoDark from "../public/logos/orca--dark.svg";
import User from "../public/icons/user--light.svg";
import UserDark from "../public/icons/user--dark.svg";
import SearchIcon from "../public/icons/search--light.svg";
import SearchDark from "../public/icons/search--dark.svg"


export default function Navbar({ user, setUser }) {
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [cart, setCart] = useContext(CartContext);
    const router = useRouter()

    let quantity = 0;
    
    cart.forEach((cartItem) => {
        quantity += cartItem.quantity
    })



    const handleLogOut = (e) => {
        fetch(`/api/logout`,{
            method: 'DELETE'
            })
            .then(() => setUser(null));
    }

    useEffect(() => {
        if (user?.id && user.email != "Guest") {
        fetch(`/api/cart_details/${user.id}`)
        .then(res => {
            if (res.ok){
                return res.json()
            } else {
            
            }
        })
        .then(cart => {
                setCart(cart);
            });
        }
    }, [user]);

    useEffect(() => {
        const changecolor = () => {
            if (window.scrollY >= 90) {
                setColor('white');
                setTextColor('black');
            } else {
                setColor('transparent');
                setTextColor('white');
            }
        };
        if (router.pathname === '/products/[id]') {
            setColor('white');
            setTextColor('black');
        } else if (router.pathname === '/cart') {
            setColor('white');
            setTextColor('black');
        } else if (router.pathname === '/login') {
            setColor('white');
            setTextColor('black');
        } else {
            window.addEventListener('scroll', changecolor);
        }
        return () => {
            window.removeEventListener('scroll', changecolor);
        }
    }, [router.pathname])

    return (
        <div style= {{ backgroundColor: `${color}` }}className="fixed left-0 top-0 w-full z-10 ease-in duration-300 flex items-center justify-center hover:bg-white h-20 ">
            <ul style={{ color: `${textColor}` }} className="flex px-10 text-white">
                <li className="px-5"><Link href="/shop">Shop</Link></li>
                <li className="px-5"><Link href="/sports">Sports</Link></li>
                <li className="px-5"><Link href="/wetsuits">Wetsuits</Link></li>
            </ul>
            <div className="px-[300px]">
                <Link href="/">
                    {color == 'transparent' ? <Image src={Logo} alt="Orca Logo" width={115} height={16} /> : <Image src={LogoDark} alt="Orca Logo" width={115} height={16} />}
                </Link>
            </div>
            <ul style={{ color: `${textColor}` }} className="flex px-10 text-white ">
                <li className="px-5"><Link href="/about">About Orca</Link></li>
                <li className="px-5 -mr-3"><Link href="/cart">Cart</Link></li>
                {quantity > 0 ? <li className="px-2 text-white items-center bg-black rounded-full"><Link href="/cart">{quantity}</Link></li> : null}
            </ul>
            <div>
                <Link href="/login" className="px-12 hover">
                    {color == 'transparent' ? <Image src={User} alt="User Icon" width={20} height={20} /> : <Image src={UserDark} alt="User Icon" width={20} height={20} />}
                </Link>
            </div>
            <div>
                <Link href="/" className="px-10">
                    {color == 'transparent' ? <Image src={SearchIcon} alt="Search Icon" width={20} height={20} /> : <Image src={SearchDark} alt="Search Icon" width={30} height={30} />}
                </Link>
            </div>
            {user?.email != "Guest" ? <div><Link href="/" onClick={handleLogOut} className="px-5">Logout</Link></div> : null}
        </div>
    );
}