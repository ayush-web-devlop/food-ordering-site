'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  
  const session = useSession();
  const status = session.status;

  return (
    <header className="flex items-center justify-between">
            <Link className="font-bold text-2xl text-red-500" href="/">Foody</Link>
            <nav className="flex gap-[7px] sm:gap-[10px] md:gap-6 text-gray-500 font-semibold">
              <Link href={'/'}>Home</Link>
              <Link href={''}>Menu</Link>
              <Link href={''}>About</Link>
              <Link href={''}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
              {status === 'authenticated' ? (
                <>
                <Link href={'/profile'}>Profile</Link>
                <button 
                onClick={() => signOut()}
                className="text-white bg-red-500 rounded-full px-8 py-2">Logout</button>
                </>
                ) : null}

              {status === 'unauthenticated' ? (
                <>
                <Link href={'/login'} className="">Login</Link>
                <Link href={'/register'} className="text-white bg-red-500 rounded-full px-8 py-2">Register</Link>
                </>
              ) : null}
              
            </nav>
          </header>
  );
}
