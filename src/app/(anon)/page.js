import { Footer } from '@/components/anon/Footer'
import HeroSec from '@/components/anon/HeroSec'
import WhyUs from '@/components/anon/WhyUs'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'

export default function page() {
    return (
        <div>
            <HeroSec />
            <WhyUs />

            <Footer />
        </div>
    )
}
