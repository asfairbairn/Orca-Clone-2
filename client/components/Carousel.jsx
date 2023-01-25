import React, { useState, useEffect} from "react";
import SportsCard from "./SportsCard";
import Link from "next/link";

export default function Carousel() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/product_category")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, []);

    const createWetsuitList = products.map((product) => (
        <SportsCard key={product.category_name} image={product.category_image} name={product.category_name} button={createGenderButtons()} />
        )
    )
    function createGenderButtons() {
        return (
            <>
                <button className="px-5 bg-white hover:bg-slate text-black font-bold py-2 rounded-full">
                    <Link href="">{`Men's`}</Link>
                </button>
                <button className="px-5 bg-white hover:bg-slate text-black font-bold py-2 px-4 rounded-full">
                    <Link href="">{`Women's`}</Link>
                </button>
            </>
        )
    }

    return (
            <div className="flex overflow-x-auto scroll-auto cursor-grab will-change-scroll scrollbar-hide">
                {createWetsuitList}
            </div>
        )
}