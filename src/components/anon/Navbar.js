import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Navbar() {
    return (
        <div className=' flex justify-between shadow-2xs items-center px-5  font-medium z-50 w-full backdrop-blur-sm sticky top-0 bg-white '>


            <Link href="/" className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt="smart farm logo"
                    height={40}
                    width={40}
                ></Image>

                <h1>Smart farm</h1>
            </Link>
            <div className='flex'>
                <Link className='' href="/"><Button variant="ghost" className="font-medium p-4 m-2">Home</Button></Link>
                <Link className='' href="/"><Button variant="ghost" className="font-medium p-4 m-2">about</Button></Link>
                <Link className='' href="/"><Button variant="ghost" className="font-medium p-4 m-2">contact us</Button></Link>
            </div>
            <Link href="signin"><Button variant="ghost" className="font-medium p-4 m-2">Sign In</Button></Link>
        </div>
    )
}
