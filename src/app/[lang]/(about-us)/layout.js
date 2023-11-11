import Banner from '@/components/about-us/Banner'
import { Content } from '@/components/about-us/Content'
import { DataProvider } from '@/components/about-us/DataContext'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_ABOUT_US_JOURNEY, GET_DATA_ABOUT_US_ORGANIZE, GET_DATA_ABOUT_US_PRIZE, GET_DATA_ABOUT_US_VISION } from '@/graphql/about-us/query'
import React from 'react'

export default async function layout({ children,params }) {
    let language = params.lang?.toUpperCase()
    let data1
    let data2
    let data3
    let data4
    data1 = await getDataPage(language, GET_DATA_ABOUT_US_VISION)
    data2 = await getDataPage(language, GET_DATA_ABOUT_US_PRIZE)
    data3 = await getDataPage(language, GET_DATA_ABOUT_US_JOURNEY)
    data4 = await getDataPage(language, GET_DATA_ABOUT_US_ORGANIZE)
    return (
        <>
            <DataProvider>
                <Banner />
                <Content 
                    lang={params?.lang}
                    data1={data1} 
                    data2={data2} 
                    data3={data3} 
                    data4={data4}  
                />
            </DataProvider>
            {children}
        </>
    )
}
