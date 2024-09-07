'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import { useState } from "react";

export default function RegisterPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleFormSubmit(ev){
      ev.preventDefault();
      fetch("/api/register", {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'content-type': 'application/json'} 
    })
    }

    return(
        <section className="mt-8 "> 
            <h1 className="text-center text-red-500 text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Email"
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                id="email"
                autocomplete="username"
                />
                <input type="password" placeholder="Password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                id="password"
                autocomplete="current-password"
                />
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">or login with provider</div>
                <button className="flex items-center justify-center gap-3">
                    <Image src={'/google.png'} alt="google image" width={20} height={20}/>
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500">
                Have an account? <Link className="underline text-blue-700" href={'/login'}>Log in</Link>
                </div>
            </form>
        </section>
    );
}