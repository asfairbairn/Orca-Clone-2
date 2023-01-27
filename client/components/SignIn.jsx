import React, {useState} from "react"
import { useRouter } from "next/router"
import Link from 'next/link';


export default function SignIn({setClick}) {
    const router = useRouter()
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
                res.json().then((user) => console.log(user)).then(router.push('/cart'))
            } else {
                res.json().then((error) => setErrors(error.errors))
            }
        })
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    return (
        <div className="h-screen">
            <h1 className="grid grid-cols-2 font-bold text-4xl pb-2 pt-80">
                Sign In
            </h1>
            <div className='py-5 mr-10'>
                <form onSubmit={handleSubmit} className="w-96 justify-center pb-2">
                    <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Email Address" name="email" value={form.email}/>
                    <input onChange={handleChange} className="inline-flex w-[570px] h-14 bg-white mb-4 px-4 py-2 text-base items-center text-left font-normal shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="username" type="text" placeholder="Password" name="password" value={form.password}/>
                    <div className="items-center mt-2 w-[570px]">
                        <button className='w-[570px] bg-black rounded-full text-white text-base font-medium m-2 py-3 px-10 mb-5 mt-5'>Enter</button>
                        <h1>{errors}</h1>
                        <p className="text-center">Don't have an account? <button onClick={() => setClick(true)}><em className="font-medium underline not-italic">Create one</em></button></p>
                    </div>
                </form>
            </div>
        </div>
    )
}