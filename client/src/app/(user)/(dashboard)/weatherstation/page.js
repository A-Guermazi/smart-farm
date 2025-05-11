import SiteHeader from '@/components/site-header'
import WeatherComponent from '@/components/WeatherComponent'
import React from 'react'
import ChartAreaInteractive from "@/components/chart-area-interactive"

export default function page() {
    return (
        <div>
            <SiteHeader current="Weather station" />
            <div className='grid gap-10'>
                <WeatherComponent></WeatherComponent>
                <ChartAreaInteractive />
            </div>
        </div>
    )
}
