import { Footer } from '@/components/anon/Footer'
import HeroSec from '@/components/anon/HeroSec'
import FarmingSolution from '@/components/anon/FarmingSolution'
import { Skeleton } from '@/components/ui/skeleton'
import React, { Suspense } from 'react'
import WhyChooseUs from '@/components/anon/WhyChooseUs'
import DemandForm from '@/components/anon/DemandForm'

export default function page() {
    return (
        <div className='flex flex-col items-center gap-10'>
            <HeroSec />
            <FarmingSolution />
            <WhyChooseUs />
            <DemandForm />
            <Footer />
        </div>
    )
}
