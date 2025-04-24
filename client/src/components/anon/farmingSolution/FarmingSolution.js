import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { IconAdjustments, IconCloudComputing, IconDroplets } from '@tabler/icons-react'
import SingleFarmingSolutionCard from './SingleFarmingSolutionCard'
export default function FarmingSolution() {
    return (
        <section className='min-h-screen content-center'>
            <div className='max-w-3xl mx-auto text-center'>
                <h1 className='font-bold text-5xl'>Smart Farming Solutions</h1>
                <p className='font-normal text-2xl my-2'>
                    Our integrated platform provides everything you need to optimize
                    your farm operations and maximize productivity
                </p>

            </div>
            <div className='flex gap-10 m-10 items-stretch flex-wrap'>

                <SingleFarmingSolutionCard
                    Icon={IconDroplets}
                    bgColor="bg-gradient-to-r from-blue-500 to-blue-400 "
                    title="Smart Irrigation"
                    mainText="Optimize water usage with soil moisture sensors and automated irrigation systems that respond to real-time conditions."
                    subtext1="Reduce water usage by up to 40%"
                    subtext2="Precision watering based on plant needs"
                    subtext3="Weather-adaptive scheduling"

                />
                <SingleFarmingSolutionCard
                    Icon={IconAdjustments}
                    bgColor="bg-gradient-to-r from-fuchsia-500 to-fuchsia-400"

                    title="Crop Monitoring"
                    mainText="Track crop health, growth patterns, and detect issues before they become problems with advanced sensors."
                    subtext1="Early disease and pest detection"
                    subtext2="Growth stage tracking and analysis"
                    subtext3="Yield prediction and optimization"
                    className=""
                />

                <SingleFarmingSolutionCard
                    Icon={IconCloudComputing}
                    bgColor="bg-gradient-to-r from-yellow-500 to-yellow-400"
                    title="Climate Control"
                    mainText="Monitor and adjust environmental conditions for optimal growing environments in greenhouses and indoor farms."
                    subtext1="Temperature and humidity optimization"
                    subtext2="Automated ventilation and shading"
                    subtext3="CO₂ level monitoring and control"
                />

            </div>
        </section>
    )
}
