import React from 'react'
import BannerDetail from './BannerDetail'
import ContentDetail from './ContentDetail'

function IndexBlogDetail({data,lang}) {
    const dataBanner = data?.news?.banner
    return (
        <>
            <BannerDetail data={dataBanner} />
            <ContentDetail data={data?.news?.content} dataSlide = {data?.news} lang={lang} />
        </>
    )
}

export default IndexBlogDetail
