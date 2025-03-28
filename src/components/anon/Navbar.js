import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between shadow items-center px-5 py-2 font-medium'>
            <Link href="/" className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt="smart farm logo"
                    height={45}
                    width={45}
                ></Image>
                <h1>Smart farm</h1>
            </Link>
            <ul className='flex gap-10'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About us</Link></li>
                <li><Link href="/">Contact Us</Link></li>
            </ul>
            <Link href="signin">Sign In</Link>
        </div>
    )
}
