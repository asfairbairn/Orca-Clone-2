import Link from "next/link";
import React from "react";
import Hero from "../components/Hero"
import Carousel from "../components/Carousel";


export default function Wetsuits() {
    return (
        <div>
            <Hero heading="Wetsuits" message="With a history of designing performance wetsuits for triathletes since 1995, our unwavering commitment to advanced, innovative swimwear empowers you to overcome your limits." />
            <Carousel />
        </div>

    );
}