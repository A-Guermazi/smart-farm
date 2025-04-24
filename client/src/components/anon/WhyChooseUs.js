import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import SingleWhyUsCard from './SingleWhyUsCard'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowsMaximize, IconBinaryTree2, IconBrandGoogleAnalytics, IconCast, IconDroplets, IconSun, IconWind } from '@tabler/icons-react'
export default function WhyChooseUs() {
    return (
        <section className='min-h-screen content-center'>
            <div className='max-w-3xl mx-auto text-center'>
                <h1 className='font-bold text-5xl'>Why Choose SmartFarm</h1>
                <p className='font-normal text-2xl my-2'>
                    Transform your agricultural business with our cutting-edge smart farming solutions


                </p>

            </div>
            <div className='flex m-10 gap-5 flex-wrap justify-center'>
                <SingleWhyUsCard
                    title="Increased Yield"
                    desc="Boost crop production by up to 25% through optimized growing conditions and data-driven decision making."
                    color='green'
                    Icon={IconBrandGoogleAnalytics}
                />
                <SingleWhyUsCard
                    title="Resource Efficiency"
                    desc="Reduce water usage by 40% and fertilizer costs by 30% with precision agriculture techniques."
                    color='blue'
                    Icon={IconDroplets}
                />
                <SingleWhyUsCard
                    title="Sustainability"
                    desc="Minimize environmental impact while maximizing productivity and profitability for future generations."
                    color='yellow'
                    Icon={IconSun}
                />
                <SingleWhyUsCard
                    title="Remote Monitoring"
                    desc="Access real-time data and control systems from anywhere via mobile or desktop applications."
                    color='purple'
                    Icon={IconWind}
                />
                <SingleWhyUsCard
                    title="Data-Driven Decisions"
                    desc="Make informed choices based on historical data, predictive analytics, and AI-powered recommendations."
                    color='orange'
                    Icon={IconBinaryTree2}
                />
                <SingleWhyUsCard
                    title="Scalable Solutions"
                    desc="Start small and expand your smart farm system as your business grows with modular technology."
                    color='red'
                    Icon={IconArrowsMaximize}
                />






                {/* <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-100 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-8 relative z-10 group-hover:text-white transition-colors duration-300">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 group-hover:bg-white/20 transition-colors mb-6">
                            <IconDroplets className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                            Increased Yield
                        </h3>
                        <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                            Boost crop production by up to 25% through optimized growing conditions and data-driven decision
                            making.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
