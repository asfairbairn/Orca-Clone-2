import React from "react"

export default function account({handleChange, setClick, form}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setClick(true)
    }

        return (
        <div>
            <h1 className="font-bold text-4xl mb-10 mt-5">
                Account
            </h1>
            <div className='py-5 mr-10'>
                <form onSubmit={handleSubmit} className="w-96">
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" name="email" value={form.email}/>
                    <div className='items-center text-center mt-2'>
                        <button className='bg-black text-white rounded-full text-sm m-2 py-3 px-64 w-80'>Next</button>
                    </div>
                </form>
                <div className='mt-16'>
                    <h1>Become an Orca Member</h1>
                    <p className='text-sm text-neutral-500 mb-2'>Sign up to recieve personalized service and benifets such as:</p>
                    <ul>
                        <li>Checkout express: safe and secure shopping</li>
                        <li>Online management: Manage your purchases and check the status of your orders.</li>
                        <li>Special Offers: see promotions and special offers.</li>
                        <li>Newsletter: Subscribe to our newsletter and stay update on the latest news from Orca.</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
