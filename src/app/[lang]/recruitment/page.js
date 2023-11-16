import Recruitment from '@/components/recruitment/Recruitment'
import getData from '@/data/getData'
import getDataPage from '@/data/getDataPage'
import { GET_ALL_SEARCH_BY_SERVER, GET_DATA_RECRUIMENT_PAGE } from '@/graphql/recruitment/query'


export default async function page({ params, searchParams }) {
    let data = await getDataPage(params?.lang, GET_DATA_RECRUIMENT_PAGE)
    const dataRecruitment = data?.data?.page?.translation?.recruiment
    const offset = searchParams?.page || 0
    const text = searchParams?.text || ''
    const dataFirstIn = await getData(GET_ALL_SEARCH_BY_SERVER(offset, params?.lang, text))
    return (
        <Recruitment dataFirstIn={dataFirstIn?.data?.allJobOpportunity} lang={params?.lang} data={dataRecruitment} />
    )
}