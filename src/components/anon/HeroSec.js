import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function HeroSec() {
    return (

        <div className='h-[100vh] flex gap-30 justify-between relative items-center mx-20 '>

            <div className="absolute top-0 -z-10 h-1/5 w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[rgb(37,255,48)] opacity-50 blur-[80px]  overflow-visible">
                    <div className="absolute top-1/2 right-0 -z-10 h-1/5 w-full bg-white">
                        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[0%] translate-y-[0%] rounded-full bg-[rgb(127,64,255)] opacity-50 blur-[80px] overflow-visible">

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-start  gap-2 px-10'>
                <h1 className='font-bold text-8xl'>Smart Farm</h1>
                <h1 className='font-bold text-3xl'>Maximize yields with precision agriculture.
                </h1>


                <Button className="w-1/2">Buy Now</Button>
            </div>
            <div className='realtive'>
                <div className='absolute -translate-x-5 -translate-y-10'>
                    <Image
                        src="/mockups/drone.png"
                        alt="smart farm hero section"
                        quality={60}
                        height={10}
                        width={130}
                    >
                    </Image>
                </div>
                <div className='absolute translate-x-120 translate-y-110'>
                    <Image
                        src="/mockups/small-water-pumps.png"
                        alt="smart farm hero section"
                        quality={40}
                        height={10}
                        width={130}
                    >
                    </Image>
                </div>
                <div className='absolute translate-x-110 -translate-y-10'>
                    <Image
                        src="/mockups/small-dashboard3.png"
                        alt="smart farm hero section"
                        quality={40}
                        height={10}
                        width={130}
                    >
                    </Image>
                </div>


                <Image
                    src="/mockups/best-green-house.png"
                    alt="smart farm hero section"
                    quality={60}
                    priority={true}
                    height={1}
                    width={600}
                >
                </Image>
            </div>

        </div >
    )
}
