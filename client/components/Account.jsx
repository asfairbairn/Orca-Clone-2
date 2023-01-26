import React from "react"
import Image from "next/image"
import AuthImage from "../public/images/background.jpg"

export default function account({handleChange, setClick, form}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setClick(true)
    }

        return (
            <div className="h-screen">
                <h1 className="grid grid-cols-2 font-bold text-4xl pb-2 pt-80">
                    Account
                </h1>
                <div className='py-5 mr-10'>
                    <form onSubmit={handleSubmit} className="w-96 justify-center">
                        <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Email Address" name="email" value={form.email}/>
                        <div className='items-center text-center mt-2'>
                            <button className='w-[570px] bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5'>Next</button>
                        </div>
                    </form>
                    <div className='mt-16'>
                        <h1 className="text-sm font-bold pb-2">Become an Orca Member</h1>
                        <p className='text-sm text-neutral-500 font-medium mb-2'>Sign up to recieve personalized service and benifets such as:</p>
                        <ul className="list-disc ml-10  text-neutral-500">
                            <li className="text-sm"><em className="font-bold not-italic">Checkout express:</em> safe and secure shopping</li>
                            <li className="text-sm"><em className="font-bold not-italic">Online management:</em> Manage your purchases and check the status of your orders.</li>
                            <li className="text-sm"><em className="font-bold not-italic">Special Offers:</em> see promotions and special offers.</li>
                            <li className="text-sm"><em className="font-bold not-italic">Newsletter:</em> Subscribe to our newsletter and stay update on the latest news from Orca.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }