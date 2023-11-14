import ServiceDetail from '@/components/service/service-detail/ServiceDetail'
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_OTHER_PRODUCT, GET_DATA_PRODUCT_DETAIL } from '@/graphql/product/query'
import React from 'react'

export default async function page({ params: { lang, slug } }) {
    let data
    let dataOtherProduct
    data = await getDataDetail(lang, slug, GET_DATA_PRODUCT_DETAIL)
    dataOtherProduct = await getDataPage(lang, GET_DATA_OTHER_PRODUCT)
    return (
        <ServiceDetail
            data={data?.data?.serviceProduct?.translation}
            lang={lang}
            dataOtherProduct={dataOtherProduct?.data?.allServiceProduct?.nodes}
        />
    )
}
