import Banner from '@/components/about-us/Banner'
import { Content } from '@/components/about-us/Content'
import { DataProvider } from '@/components/about-us/DataContext'
import React from 'react'

function layout({ children }) {
    return (
        <>
            <DataProvider>
                <Banner />
                <Content />
            </DataProvider>
            {children}
        </>
    )
}

export default layout
