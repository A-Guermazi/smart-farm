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
import { IconDroplets } from '@tabler/icons-react'
export default function WhyUs() {
    return (
        <section className='m-20'>
            <h1 className='font-bold text-5xl'>Why Choose Us</h1>
            <div className='flex m-10 gap-5 flex-wrap justify-center'>
                <Card className="grid ">
                    <CardHeader className="grid gap-5 mt-2 ">
                        <div className='bg-blue-400 h-15 w-15 rounded-md flex justify-center items-center'>
                            <IconDroplets stroke={1.5} className='h-10 w-10' />
                        </div>
                        <CardTitle className="text-2xl">Smart Irrigation</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4">
                            <div className="flex-1 space-y-1 max-w-[360px]  ">
                                <p className="text-sm font-normal ">
                                    Optimize water usage with soil moisture sensors and automated irrigation
                                    systems that respond to real-time conditions.
                                </p>
                                <div className="text-sm text-muted-foreground mt-5">
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Reduce water usage by up to 40%</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Precision watering based on plant needs</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Weather-adaptive scheduling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {/* <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
 className='flex gap-3'                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    title
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    description
                                </p>
                            </div>
                        </div> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/" className="w-full hover:underline">
                            Learn more  &gt;
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="grid ">
                    <CardHeader className="grid gap-5 mt-2 ">
                        <div className='bg-blue-400 h-15 w-15 rounded-md flex justify-center items-center'>
                            <IconDroplets stroke={1.5} className='h-10 w-10' />
                        </div>
                        <CardTitle className="text-2xl">Smart Irrigation</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4">
                            <div className="flex-1 space-y-1 max-w-[360px]  ">
                                <p className="text-sm font-normal ">
                                    Optimize water usage with soil moisture sensors and automated irrigation
                                    systems that respond to real-time conditions.
                                </p>
                                <div className="text-sm text-muted-foreground mt-5">
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Reduce water usage by up to 40%</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Precision watering based on plant needs</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Weather-adaptive scheduling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {/* <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
 className='flex gap-3'                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    title
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    description
                                </p>
                            </div>
                        </div> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/" className="w-full  hover:underline">
                            Learn more  &gt;
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="grid ">
                    <CardHeader className="grid gap-5 mt-2 ">
                        <div className='bg-blue-400 h-15 w-15 rounded-md flex justify-center items-center'>
                            <IconDroplets stroke={1.5} className='h-10 w-10' />
                        </div>
                        <CardTitle className="text-2xl">Smart Irrigation</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4">
                            <div className="flex-1 space-y-1 max-w-[360px]  ">
                                <p className="text-sm font-normal ">
                                    Optimize water usage with soil moisture sensors and automated irrigation
                                    systems that respond to real-time conditions.
                                </p>
                                <div className="text-sm text-muted-foreground mt-5">
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Reduce water usage by up to 40%</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Precision watering based on plant needs</p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <p>Weather-adaptive scheduling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            {/* <div
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
 className='flex gap-3'                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    title
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    description
                                </p>
                            </div>
                        </div> */}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href="/" className="w-full hover:underline">
                            Learn more  &gt;
                        </Link>
                    </CardFooter>
                </Card>

            </div>
        </section>
    )
}
