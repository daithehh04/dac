import Design from '@/components/design/Design'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_DESIGN } from '@/graphql/design/query'
import React from 'react'

export default async function page({ params: { lang } }) {
    let data
    let language =lang?.toUpperCase()
    data = await getDataPage(language,GET_DATA_DESIGN)
    return (
        <Design data={data?.data?.page?.translation} />
    )
}

