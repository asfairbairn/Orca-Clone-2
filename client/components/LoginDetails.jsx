import React, { useState } from 'react'
import Image from 'next/image';
import AuthImage from '../public/images/background.jpg'
import Link from 'next/link';
import CreateAccount from './CreateAccount'
import Account from './Account'
import Signin from './Signin';


export default function LoginDetails () {

    const [click, setClick] = useState(null)

    const [form, setForm] = useState({
        email: '',
        password: ''
        })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className="grid grid-cols-3 mt-20">
            <div className="col-span-2 bg-cover bg-auth w-full">
            </div>
            <div className="bg-stone-100">
                <div className="ml-24">
                    {click == null ? <Account setClick={setClick} handleChange={handleChange} form={form}/> : click==true? <CreateAccount form={form} handleChange={handleChange} setClick={setClick}/> : <Signin setClick={setClick}/>}
                </div>
            </div>
        </div>
    );

}