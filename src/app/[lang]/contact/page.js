import Contact from '@/components/contact/Contact'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CONTACT_PAGE } from '@/graphql/contact/query'
import React from 'react'

async function page({ params: { lang } }) {
    let data
    data = await getDataPage(lang, GET_DATA_CONTACT_PAGE)
    console.log(data?.data?.page?.translation?.contact);
    return (
        <Contact dataContact={data?.data?.page?.translation?.contact} />
    )
}

export default page