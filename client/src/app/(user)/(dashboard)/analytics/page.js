import AnalyzeWeather from '@/components/analyzeWeather'
import WeatherComponent from '@/components/WeatherComponent'
import React from 'react'
import SiteHeader from '@/components/site-header'

export default function page() {
    return (
        <div>
            <SiteHeader current="analytics" />
            <AnalyzeWeather></AnalyzeWeather>
        </div>
    )
}
