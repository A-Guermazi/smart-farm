"use client"
import SiteHeader from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function page() {

    return (
        <div>
            <SiteHeader current="Requests To Join" />

            <div className='m-3'>
                <Card className="shadow-sm rounded-2xl p-2 flex">
                    <CardHeader>
                        <CardTitle className="text-xl">Jane Doe</CardTitle>
                        <CardDescription>Frontend Developer at Example Inc.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className='flex  gap-1'>
                            <Button >Accept</Button>
                            <Button variant="destructive">Reject</Button>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default page