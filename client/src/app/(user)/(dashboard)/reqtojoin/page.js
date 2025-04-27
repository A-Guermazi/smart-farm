"use client"
import SiteHeader from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {
    const [reqs, setReqs] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/auth/showReqsToJoinFarm",
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
        ).then((response) => {
            if (response.data.error) { alert(response.data.error); }
            else {
                console.log(response.data)
                setReqs(response.data)
                console.log(reqs)
            }
        }
        )
    }, [])

    // if (!reqs) { return (<div> loading..</div>) }
    const submit = (user, type) => {
        console.log(user)
        console.log(type)

        axios.post("http://localhost:3001/auth/handleReqsToJoin", { user: user, type: type },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
        ).then((response) => {
            if (response.data.error) { alert(response.data.error); }
            else {
                console.log(response.data)
                setReqs(prevReqs => prevReqs.filter(req => req.id !== user.id));

            }
        }
        )

    }

    return (
        <div>
            <SiteHeader current="Requests To Join" />

            <div className='m-3'>
                {reqs.map((user, key) => (
                    <Card key={key} className="shadow-sm rounded-2xl p-2 flex mt-3">
                        <CardHeader>
                            <CardTitle className="text-xl">{user.name} {user.lastName}</CardTitle>
                            <CardDescription>{user.email}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-between items-center">
                            <div className='flex  gap-1'>
                                <Button onClick={() => { submit(user, "accept") }}>Accept</Button>
                                <Button onClick={() => { submit(user, "reject") }} variant="destructive">Reject</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}


            </div>
        </div>
    )
}

export default page