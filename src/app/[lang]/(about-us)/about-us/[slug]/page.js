'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import IndexJourney from '@/components/about-us/about-journey/IndexJourney'
import { IndexOrganize } from '@/components/about-us/about-organize/IndexOrganize'
import { IndexPrize } from '@/components/about-us/about-prize/IndexPrize'
import IndexVision from '@/components/about-us/about-vision/IndexVision'
function page() {
    const pathName = usePathname()
    return (
        <>
            {
                pathName === '/about-us/journey' &&
                <IndexJourney />
            }
            {
                pathName === '/about-us/organize' &&
                <IndexOrganize />
            }
            {
                pathName === '/about-us/prize' &&
                <IndexPrize />
            }
            {
                pathName === '/about-us/vision' &&
                <IndexVision />
            }

        </>
    )
}

export default page
