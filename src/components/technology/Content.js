'use client'
import React, { useEffect, useState } from 'react'
import { useDataBanner } from './DataContext'
import Link from 'next/link'
function Content({ lang, dataOffset, dataFlexo, dataGravure, dataDigital, dataOtherPrint }) {
    const [page, setPage] = useState(1)
    const context = useDataBanner()
    let dataInfoOffset = dataOffset?.data?.page?.translation?.technology_common
    let dataInfoFlexo = dataFlexo?.data?.page?.translation?.technology_common
    let dataInfoGravure = dataGravure?.data?.page?.translation?.technology_common
    let dataInfoDigital = dataDigital?.data?.page?.translation?.technology_common
    let dataInfoOtherPrint = dataOtherPrint?.data?.page?.translation?.technology_otherPrinting

    let dataSlugOffset = dataOffset?.data?.page?.translation?.slug
    let dataSlugFlexo = dataFlexo?.data?.page?.translation?.slug
    let dataSlugGravure = dataGravure?.data?.page?.translation?.slug
    let dataSlugDigital = dataDigital?.data?.page?.translation?.slug
    let dataSlugOtherPrint = dataOtherPrint?.data?.page?.translation?.slug
    const data = [
        {
            id: 1,
            title: dataInfoOffset?.content?.titlePage,
            background: dataInfoOffset?.banner?.background?.sourceUrl,
            altText: dataInfoOffset?.banner?.background?.altText,
            text: dataInfoOffset?.banner?.title
        },
        {
            id: 2,
            title: dataInfoFlexo?.content?.titlePage,
            background: dataInfoFlexo?.banner?.background?.sourceUrl,
            altText: dataInfoFlexo?.banner?.background?.altText,
            text: dataInfoFlexo?.banner?.title
        },
        {
            id: 3,
            title: dataInfoGravure?.content?.titlePage,
            background: dataInfoGravure?.banner?.background?.sourceUrl,
            altText: dataInfoGravure?.banner?.background?.altText,
            text: dataInfoGravure?.banner?.title
        },
        {
            id: 4,
            title: dataInfoDigital?.content?.titlePage,
            background: dataInfoDigital?.banner?.background?.sourceUrl,
            altText: dataInfoDigital?.banner?.background?.altText,
            text: dataInfoDigital?.banner?.title
        },
        {
            id: 5,
            title: dataInfoOtherPrint?.content?.titlepage,
            background: dataInfoOtherPrint?.banner?.background?.sourceUrl,
            altText: dataInfoOtherPrint?.banner?.background?.altText,
            text: dataInfoOtherPrint?.banner?.title
        }
    ]

    const slugPage = [
        dataSlugOffset, dataSlugFlexo, dataSlugGravure, dataSlugDigital, dataSlugOtherPrint
    ]
    const handlePage = (page) => {
        setPage(page.id)
        context.setDataBanner(page)
        // window.scroll(0, 0)
    }
    useEffect(() => {
        window.scroll(0, 0)
    }, [page])
    return (
        <div className='max-md:hidden'>
            <ul className='flex pt-[3.8rem] md:pl-[4.17rem] lg:pl-[12.03rem] bg-[#F5F5F5]'>
                {data?.map((item, index) => {
                    return (
                        <Link href={`/technology/${slugPage[index]}`} key={index * Math.random()} className={`uppercase text-[1.3rem] lg:text-[1.04167rem] mr-[1.67rem] cursor-pointer ${page === index + 1 ? 'text-[#00A84F]' : ''}`} onClick={() => handlePage(item)}>{item?.title}</Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content