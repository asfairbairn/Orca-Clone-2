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
        <div>
            <h1 className="font-bold text-4xl mb-10 mt-5">
                Create Account
            </h1>
            <div className='py-5 mr-10'>
                <form onSubmit={handleSubmit} className="w-80">
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" placeholder="Username" value={form.username}/>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" name="email" value={form.email}/>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" name="password" value={form.password}/>
                    <div className='items-center text-center mt-2'>
                        <ul>
                            <li>I have read and accept the Terms and Conditions and Privacy Policy associated with the management of my user account.</li>
                            <li>I want to subscribe to Orca's newsletter and I have read and accept the Privacy Policy.</li>
                        </ul>
                        <button className='bg-black text-white rounded-full text-sm m-2 py-3 px-64 w-80'>Register</button>
                        <p>Already have an account? <button onClick={() => setClick(false)}>Log in</button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}