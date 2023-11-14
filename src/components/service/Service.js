import React from 'react'
import Banner from './Banner'
import Product from './Product'

function Service({ lang, data, dataCate }) {
    return (
        <>
            <Banner data={data?.product?.banner} />
            <Product lang={lang} data={data?.product?.content} dataCate={dataCate} />
        </>
    )
}

export default Service
