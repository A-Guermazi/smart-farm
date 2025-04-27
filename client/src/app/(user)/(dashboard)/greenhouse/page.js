"use client"
import SiteHeader from '@/components/site-header'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get("http://localhost:3001/data/getLastGreenHouse",
                {
                    headers: {
                        accessToken: localStorage.getItem("accessToken")
                    }
                }).then((response) => {
                    if (JSON.stringify(response.data) !== JSON.stringify(data)) {
                        setData(response.data)
                    }
                }).catch(error => {
                    console.error("Error fetching data:", error);
                })
        }

        fetchData();  // Initial fetch
        const intervalId = setInterval(fetchData, 100000);  // Fetch every 100 seconds

        return () => clearInterval(intervalId);  // Cleanup interval when component unmounts
    }, [data]);  // Run when 'data' changes

    if (!data) return <div className="flex h-screen items-center justify-center">Loading...</div>
    const normalRange = (current, min, max) => {
        if (current >= min && current <= max) {
            return { status: "bon", color: "text-green-500" }; // green for normal
        } else if (current < min) {
            return { status: "trop bas", color: "text-red-500" }; // red for too low
        } else if (current > max) {
            return { status: "trop haut", color: "text-yellow-500" }; // yellow for too high
        } else {
            return { status: "erreur", color: "text-gray-500" }; // gray for error
        }
    }
    return (
        <div>
            <SiteHeader current="Green House" />

            <div className=" grid grid-cols-4 gap-4 
                    px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs
                     lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Temperature</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.temperature} km/h
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className={`${normalRange(data.temperature, 15, 25).color}`}>{normalRange(data.temperature, 15, 25).status}</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Humidity</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.humidity} %
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className={`${normalRange(data.humidity, 30, 70).color}`}>{normalRange(data.humidity, 30, 70).status}</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Soil Humidity</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.soilHumidity} %
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className={`${normalRange(data.soilHumidity, 20, 60).color}`}>{normalRange(data.soilHumidity, 20, 60).status}</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>Gas</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.gas} PPM
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className={`${normalRange(data.gas, 0, 100).color}`}>{normalRange(data.gas, 0, 100).status}</div>
                    </CardFooter>
                </Card>

                <Card className="@container/card">
                    <CardHeader>
                        <CardDescription>fan working</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            {data.fan === true ? "yes" : "no"}
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div >
    )
}
