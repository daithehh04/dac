import IndexRecruitmentDetail from '@/components/recruitment/recruitment-detail/IndexRecruitmentDetail'
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage';
import { GET_DATA_NEW_JOBS, GET_DATA_RECRUIMENT_DETAIL } from '@/graphql/recruitment/query';
import React from 'react'

async function page({ params: { lang, slug } }) {
    let data
    let dataJob
    data = await getDataDetail(lang, slug, GET_DATA_RECRUIMENT_DETAIL)
    dataJob = await getDataPage(lang,GET_DATA_NEW_JOBS)
    const dataDetail = data?.data?.jobOpportunity?.translation
    const dataJobNew = dataJob?.data?.allJobOpportunity?.nodes

    return (
        <IndexRecruitmentDetail lang={lang} dataJobNew={dataJobNew} data={dataDetail} />
    )
}

export default page