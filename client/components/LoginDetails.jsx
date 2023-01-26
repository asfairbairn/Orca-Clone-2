import React, { useState } from 'react'
import Image from 'next/image';
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
        <div className="grid grid-cols-2 mt-20 ml-32">
            <div>

            </div>
            <div className="bg-stone-100">
                <div className="grid grid-row-1 divide-y ml-20 max-w-[600px]">
                    {click == null ? <Account setClick={setClick} handleChange={handleChange} form={form}/> : click==true? <CreateAccount form={form} handleChange={handleChange} setClick={setClick}/> : <Signin setClick={setClick}/>}
                </div>
            </div>
        </div>
    );

}