import HeroSec from '@/components/anon/HeroSec'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

export default function page() {
    return (
        <div>
            <HeroSec />
            <div className='h-[400vh] bg-amber-800'>
            </div>
        </div>
    )
}
