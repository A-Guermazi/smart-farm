import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { IconLeaf } from '@tabler/icons-react'

export default function Navbar() {
    return (
        <div className=' flex justify-between shadow-2xs items-center px-5  font-medium z-50 w-full backdrop-blur-sm sticky top-0 bg-white content-center'>


            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600 ">
                <IconLeaf className="h-5 w-5" />
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                    SmartFarm
                </span>
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
