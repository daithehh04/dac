import React from 'react'
import Banner from './Banner'
import Content from './Content'
import { DataProvider } from './DataContext'
function Technology() {
    return (
        <DataProvider>
            <Banner />
            <Content />
        </DataProvider>
    )
}

export default Technology