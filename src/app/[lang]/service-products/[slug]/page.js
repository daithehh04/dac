import ServiceDetail from '@/components/service/service-detail/ServiceDetail'
import { fetchData } from '@/data/fetchData'
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_DATA_OTHER_PRODUCT, GET_DATA_PRODUCT_DETAIL, META_PRODUCT_DETAIL_QUERY } from '@/graphql/product/query'
import React from 'react'

export async function generateMetadata({ params: { lang, slug } }) {
    const res = await fetchData(META_PRODUCT_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
    const servProduct = res?.data?.serviceProduct?.translation?.seo
    const featuredImage = res?.data?.serviceProduct?.translation?.featuredImage
    const title = servProduct?.title
    const excerpt = servProduct?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {

    let data = await getDataDetail(lang, slug, GET_DATA_PRODUCT_DETAIL)
    let dataOtherProduct = await getDataPage(lang, GET_DATA_OTHER_PRODUCT)
    return (
        <ServiceDetail
            data={data?.data?.serviceProduct?.translation}
            lang={lang}
            dataOtherProduct={dataOtherProduct?.data?.allServiceProduct?.nodes}
        />
    )
}
