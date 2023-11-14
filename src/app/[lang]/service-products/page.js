import Service from '@/components/service/Service'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, GET_DATA_PRODUCT_PAGE, GET_FIRST_PRODUCT_DETAIL } from '@/graphql/product/query'
import React from 'react'

export default async function page({ params: { lang } }) {
    let data
    let dataCategory
    let dataProductFirst
    data = await getDataPage(lang, GET_DATA_PRODUCT_PAGE)
    dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    dataProductFirst = await getDataPage(lang, GET_FIRST_PRODUCT_DETAIL)
    return (
        <Service
            data={data?.data?.page?.translation}
            lang={lang}
            dataCate={dataCategory?.data?.allCategoryProducts?.nodes}
        />
    )
}


