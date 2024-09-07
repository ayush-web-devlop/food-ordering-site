import Link from "next/link";

export default function Header() {
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
              <Link href={'/login'} className="">Login</Link>
              <Link href={'/register'} className="text-white bg-red-500 rounded-full px-8 py-2">Register</Link>
            </nav>
          </header>
  );
}
