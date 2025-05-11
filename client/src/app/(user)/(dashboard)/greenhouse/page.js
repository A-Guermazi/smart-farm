import GreenHouseCom from '@/components/GreenHouseComp'
import SiteHeader from '@/components/site-header'
import React from 'react'

export default function page() {
    return (
        <div>
            <SiteHeader current="Green House" />

            <GreenHouseCom></GreenHouseCom>
        </div>
    )
}
