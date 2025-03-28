import Navbar from '@/components/anon/Navbar'
import React from 'react'

export default function anonLayout({ children }) {
    return (
        <div>
            <Navbar className="sticky" />
            {children}
        </div>
    )
}
