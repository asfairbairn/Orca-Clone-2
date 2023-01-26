import React, { useContext } from "react";
import Link from "next/link";
import ArrowLeft from "../public/icons/arrow-left--dark.svg"
import Image from "next/image";
import LoginDetails from "../components/LoginDetails"
import CartContext from "../contexts/CartContext"

export default function login() {
    const [cart, setCart] = useContext(CartContext)

    return (
        <div>
            <LoginDetails />
        </div>
    )
}