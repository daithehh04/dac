import React from 'react'
import IndexJourney from '@/components/about-us/about-journey/IndexJourney'
import { IndexOrganize } from '@/components/about-us/about-organize/IndexOrganize'
import { IndexPrize } from '@/components/about-us/about-prize/IndexPrize'
import IndexVision from '@/components/about-us/about-vision/IndexVision'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_ABOUT_US_JOURNEY, GET_DATA_ABOUT_US_ORGANIZE, GET_DATA_ABOUT_US_PRIZE, GET_DATA_ABOUT_US_VISION } from '@/graphql/about-us/query'
export default async function Page({params}) {
    let language = params?.lang?.toUpperCase()
    let data
    if(params?.slug === 'vision'){
        data = await getDataPage(language, GET_DATA_ABOUT_US_VISION)
    }
    if(params?.slug === 'prize'){
        data = await getDataPage(language, GET_DATA_ABOUT_US_PRIZE)
    }
    if(params?.slug === 'journey'){
        data = await getDataPage(language, GET_DATA_ABOUT_US_JOURNEY)
    }
    if(params?.slug === 'organize'){
        data = await getDataPage(language, GET_DATA_ABOUT_US_ORGANIZE)
    }
    return (
        <>
            {
                params?.slug === 'journey' &&
                <IndexJourney data={data} />
            }
            {
                params?.slug === 'organize' &&
                <IndexOrganize data={data} />
            }
            {
                params?.slug === 'prize' &&
                <IndexPrize data={data} />
            }
            {
                params?.slug === 'vision' &&
                <IndexVision data={data} />
            }

        </>
    )
}


