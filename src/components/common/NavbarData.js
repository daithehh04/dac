import React from 'react'
import Navbar from './Navbar'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_HEADER, GET_DATA_MOBILE_JOURNEY, GET_DATA_MOBILE_ORGANIZE, GET_DATA_MOBILE_PRIZE, GET_DATA_MOBILE_VISION } from '@/graphql/home/query'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE } from '@/graphql/product/query'
import { GET_SLUG_DIGITAL, GET_SLUG_FLEXO, GET_SLUG_GRAVURE, GET_SLUG_OFFSET, GET_SLUG_OTHERPRINT } from '@/graphql/technology/query'
async function NavbarData({ lang }) {
    let data
    let dataVision
    let dataJourney
    let dataOrganize
    let dataPrize
    let slugOffset
    let slugFlexo
    let slugGravure
    let slugDigital
    let slugOtherPrint

    data = await getDataPage(lang, GET_DATA_HEADER)
    dataVision = await getDataPage(lang, GET_DATA_MOBILE_VISION)
    dataJourney = await getDataPage(lang, GET_DATA_MOBILE_JOURNEY)
    dataOrganize = await getDataPage(lang, GET_DATA_MOBILE_ORGANIZE)
    dataPrize = await getDataPage(lang, GET_DATA_MOBILE_PRIZE)
    slugOffset = await getDataPage(lang, GET_SLUG_OFFSET)
    slugFlexo = await getDataPage(lang, GET_SLUG_FLEXO)
    slugGravure = await getDataPage(lang, GET_SLUG_GRAVURE)
    slugDigital = await getDataPage(lang, GET_SLUG_DIGITAL)
    slugOtherPrint = await getDataPage(lang, GET_SLUG_OTHERPRINT)
    let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    const dataVisionFinal = dataVision?.data?.page?.translation
    const dataJourneyFinal = dataJourney?.data?.page?.translation
    const dataOrganizeFinal = dataOrganize?.data?.page?.translation
    const dataPrizeFinal = dataPrize?.data?.page?.translation
    const dataHeader = data?.data?.page?.translation?.homepage?.header?.nav
    const slugOffsetFinal = slugOffset?.data?.page?.translation
    const slugFlexoFinal = slugFlexo?.data?.page?.translation
    const slugGravureFinal = slugGravure?.data?.page?.translation
    const slugDigitalFinal = slugDigital?.data?.page?.translation
    const slugOtherPrintFinal = slugOtherPrint?.data?.page?.translation

    return (
        <Navbar
            dataHeader={dataHeader}
            lang={lang}
            dataJourneyFinal={dataJourneyFinal}
            dataVisionFinal={dataVisionFinal}
            dataOrganizeFinal={dataOrganizeFinal}
            dataPrizeFinal={dataPrizeFinal}
            dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
            slugOffsetFinal={slugOffsetFinal}
            slugFlexoFinal={slugFlexoFinal}
            slugGravureFinal={slugGravureFinal}
            slugDigitalFinal={slugDigitalFinal}
            slugOtherPrintFinal={slugOtherPrintFinal}
        />
    )
}

export default NavbarData
