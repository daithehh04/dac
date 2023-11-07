import Banner from '@/components/technology/Banner'
import Content from '@/components/technology/Content'
import { DataProvider } from '@/components/technology/DataContext'
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