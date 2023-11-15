import Service from '@/components/service/Service'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, GET_DATA_PRODUCT_PAGE } from '@/graphql/product/query'
import React from 'react'

export default async function page({ params: { lang } }) {
    let data
    let dataCategory
    data = await getDataPage(lang, GET_DATA_PRODUCT_PAGE)
    dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    return (
        <Service
            data={data?.data?.page?.translation}
            lang={lang}
            dataCate={dataCategory?.data?.allCategoryProducts?.nodes}
        />
    )
}


