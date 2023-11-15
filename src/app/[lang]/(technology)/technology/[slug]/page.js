import React from 'react'
import IndexGravure from '@/components/technology/technology-gravure/IndexGravure';
import IndexOffset from '@/components/technology/technology-offset/IndexOffset';
import IndexFlexo from '@/components/technology/technology-flexo/IndexFlexo';
import IndexDigital from '@/components/technology/technology-digital/IndexDigital';
import IndexOtherPrinting from '@/components/technology/technology-otherPrinting/IndexOtherPrinting';
import { GET_DATA_TECHNOLOGY_DIGITAL, GET_DATA_TECHNOLOGY_FLEXO, GET_DATA_TECHNOLOGY_GRAVURE, GET_DATA_TECHNOLOGY_OFFSET, GET_DATA_TECHNOLOGY_OTHERPRINT } from '@/graphql/technology/query';
import getDataPage from '@/data/getDataPage';
export default async function page({ params }) {
    let language = params?.lang?.toUpperCase()
    let data
    if (params?.slug === 'offset') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_OFFSET)
    }
    if (params?.slug === 'flexo') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_FLEXO)
    }
    if (params?.slug === 'gravure') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_GRAVURE)
    }
    if (params?.slug === 'digital') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_DIGITAL)
    }
    if (params?.slug === 'other-printing') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_OTHERPRINT)
    }
    return (
        <>
            {
                params?.slug === 'gravure' &&
                <IndexGravure data={data} />
            }
            {
                params?.slug === 'offset' &&
                <IndexOffset data={data} />
            }
            {
                params?.slug === 'flexo' &&
                <IndexFlexo data={data} />
            }
            {
                params?.slug === 'digital' &&
                <IndexDigital data={data} />
            }
            {
                params?.slug === 'other-printing' &&
                <IndexOtherPrinting data={data} />
            }
        </>
    )
}
