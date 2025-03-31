import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
export default function
    () {
    //delete this component after finished
    //this file is just to know how to code one card 
    //the i recopy the three cards in one file
    return (
        <div>
            <Card className="grid ">
                <CardHeader className="grid gap-5 mt-2 ">
                    <Image src="/avatars/shadcn.jpg"
                        height={50}
                        width={50}
                        alt="irrigation"
                    ></Image>
                    <CardTitle className="text-2xl">Smart Irrigation</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4">
                        <div className="flex-1 space-y-1 max-w-[20px] text-wrap">
                            <p className="text-sm font-normal max-w-sm text-wrap">
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
                    <Link href="/" className="w-full">
                        Learn more  &gt;
                    </Link>
                </CardFooter>
            </Card>




        </div>
    )
}
