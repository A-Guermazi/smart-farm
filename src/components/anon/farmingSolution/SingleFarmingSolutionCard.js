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
import { IconDroplets } from '@tabler/icons-react'
export default function ({ title, Icon, mainText, subtext1, subtext2, subtext3, bgColor }) {
    return (
        <Card className="min-h-[450px] flex flex-col max-w-[500px]">
            <CardHeader className="grid gap-5 mt-2 ">
                <div className={`${bgColor} text-white h-15 w-15 rounded-md flex justify-center items-center`}>
                    {Icon && < Icon stroke={1.5} className='h-10 w-10' />}
                </div>
                <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 flex-grow    ">
                <div className=" flex items-center space-x-4">
                    <div className="flex-1 space-y-1 max-w-[360px]  ">
                        <p className="text-sm font-normal ">
                            {mainText}
                        </p>
                        <div className="text-sm text-muted-foreground mt-5">
                            <div className='flex gap-3'>
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <p>{subtext1}</p>
                            </div>
                            <div className='flex gap-3'>
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <p>{subtext2}</p>
                            </div>
                            <div className='flex gap-3'>
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <p>{subtext3}</p>
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
        </Card >
    )
}
