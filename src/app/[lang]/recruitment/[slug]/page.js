import IndexRecruitmentDetail from '@/components/recruitment/recruitment-detail/IndexRecruitmentDetail'
import getDataDetail from '@/data/getDataDetail'
import { GET_DATA_RECRUIMENT_DETAIL } from '@/graphql/recruitment/query';
import React from 'react'

async function page({ params: { lang, slug } }) {
    let data
    data = await getDataDetail(lang, slug, GET_DATA_RECRUIMENT_DETAIL)
    return (
        <IndexRecruitmentDetail />
    )
}

export default page