import React, {useState} from "react"
import Link from 'next/link';


export default function signin({setClick}) {
    const [errors, setErrors] = useState([])
    const [form, setForm] = useState({
        email: '',
        password: '',
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        // setClick(true)
        fetch('/api/login',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then(res => {
            if(res.ok) {
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then((error) => setErrors(error.errors))
            }
        })
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <h1 className="font-bold text-4xl mb-10 mt-5">
                Sign In
            </h1>
            <div className='py-5 mr-10'>
                <form onSubmit={handleSubmit} className="w-96">
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" name="email" value={form.email}/>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" name="password" value={form.password}/>
                    <div className='items-center text-center mt-2'>
                        <button className='bg-black text-white rounded-full text-sm m-2 py-3 px-64 w-80'>Enter</button>
                        <h1>{errors}</h1>
                    </div>
                </form>
                <div className='mt-16'>
                    <p>Don't have an account? <button onClick={() => setClick(true)}>Create one</button></p>
                </div>
            </div>
        </div>
    )
}