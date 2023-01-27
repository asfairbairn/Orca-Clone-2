import React, {useState} from "react";
import Link from 'next/link';



export default function CreateAccount({form, handleChange, setClick}) {
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setErrors([])
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => console.log(user))
            } else {
                res.json().then((error) => setErrors(error.errors))
            }
        })
    }

    return (
        <div className="h-screen ">
            <h1 className="grid grid-cols-2 font-bold text-4xl pb-2 pt-80">
                Create Account
            </h1>
            <div className='py-5 mr-10'>
                <form onSubmit={handleSubmit} className="w-96 justify-center pb-2">
                    <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Email" name="email" value={form.email}/>
                    <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Password" name="password" value={form.password}/>
                    {/* <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Repeat Password" name="password" value={form.password}/> */}
                    <div className='items-center mt-2 w-[570px]'>
                        <div className="form-check mr-4 mb-3 text-sm">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-none bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <div className="flex">
                                <label className="form-check-label text-gray-800 inline-block" for="flexCheckDefault">
                                I have read and accept the <em className="font-medium underline not-italic">Terms and Conditions</em> and <em className="font-medium underline not-italic">Privacy Policy</em> associated with the management of my user account.
                                </label>
                            </div>
                        </div>
                        <div className="form-check mr-4 mb-2 text-sm">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-none bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <div className="flex">
                                <label className="form-check-label text-gray-800 inline-block" for="flexCheckDefault">
                                I want to subscribe to Orca's newsletter and I have read and accept the <em className="font-medium underline not-italic">Privacy Policy</em>.
                                </label>
                            </div>
                        </div>
                        <button className='w-[570px] bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5'>Register</button>
                        <p className="text-center">Already have an account? <button onClick={() => setClick(false)}><em className="font-medium underline not-italic">Log in</em></button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}