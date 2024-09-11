'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function ProfilePage() {
    const router = useRouter()

    const session = useSession();
    console.log(session);
    
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const { status } = session;

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name)
            fetch('/api/profile').then(response => 
                response.json().then(data => {
                    setPhone(data.phone)
                    setStreetAddress(data.streetAddress)
                    setPostalCode(data.setPostalCode)
                    setCity(data.city)
                    setCountry(data.country)
                })
            )
        }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        
        const savingPromise = new Promise(async(resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: userName,
                    streetAddress,
                    phone,
                    postalCode,
                    city,
                    country
                 })
            });
            if (response.ok) 
                resolve()
                else 
                reject()
        } )

        await toast.promise(savingPromise, {
            loading: 'saving...',
            success: 'Profile saved',
            error: 'Error'
        })
    }

    if (status === 'loading') {
        return 'Loading....'
    }

    if (status === 'unauthenticated') {
        router.push('/login')
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-red-500 text-4xl mb-4">
                profile
            </h1>
            <form
                className="max-w-xs mx-auto"
                onSubmit={handleProfileInfoUpdate}
            >
                <div>
                    <label>First and last name</label>
                    <input
                        placeholder="First and last name"
                        type="text"
                        value={userName}
                        onChange={ev => setUserName(ev.target.value)}
                    />
                    <label>Email</label>
                    <input className="text-gray-500" type="email" value={session.data.user.email} disabled={true} />
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Phone Number" 
                    value={phone} onChange={ev => setPhone(ev.target.value)}
                    />
                    <label>Street Address</label>
                    <input type="text" placeholder="Street Address"
                    value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}
                    />
                    <div className="flex gap-2">
                        <div>
                            <label>Pin Code</label>
                    <input type="text" placeholder="Pin Code"
                    value={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                    />
                    </div>
                    <div>
                    <label>City</label>
                    <input type="text" placeholder="City"
                    value={city} onChange={ev => setCity(ev.target.value)}
                    style={{'margin': '0'}}
                    />
                    </div>
                    </div>
                    <label>Country</label>
                    <input type="text" placeholder="Country"
                    value={country} onChange={ev => setCountry(ev.target.value)}
                    />

                    <button type="submit">Save</button>
                </div>
            </form>
        </section>
    );
}