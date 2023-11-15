import React from 'react'
import Navbar from './Navbar'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_HEADER, GET_DATA_MOBILE_JOURNEY, GET_DATA_MOBILE_ORGANIZE, GET_DATA_MOBILE_PRIZE, GET_DATA_MOBILE_VISION } from '@/graphql/home/query'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE } from '@/graphql/product/query'
async function NavbarData({ lang }) {
    let data
    let dataVision
    let dataJourney
    let dataOrganize
    let dataPrize
    data = await getDataPage(lang, GET_DATA_HEADER)
    dataVision = await getDataPage(lang, GET_DATA_MOBILE_VISION)
    dataJourney = await getDataPage(lang, GET_DATA_MOBILE_JOURNEY)
    dataOrganize = await getDataPage(lang, GET_DATA_MOBILE_ORGANIZE)
    dataPrize = await getDataPage(lang, GET_DATA_MOBILE_PRIZE)
    const dataVisionFinal = dataVision?.data?.page?.translation
    const dataJourneyFinal = dataJourney?.data?.page?.translation
    const dataOrganizeFinal = dataOrganize?.data?.page?.translation
    const dataPrizeFinal = dataPrize?.data?.page?.translation
    const dataHeader = data?.data?.page?.translation?.homepage?.header?.nav
    let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    return (
        <Navbar
            dataHeader={dataHeader}
            lang={lang}
            dataJourneyFinal={dataJourneyFinal}
            dataVisionFinal={dataVisionFinal}
            dataOrganizeFinal={dataOrganizeFinal}
            dataPrizeFinal={dataPrizeFinal}
            dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
        />
    )
}

export default NavbarData
