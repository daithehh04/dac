import React from 'react'
import BannerDetail from './BannerDetail'
import Infomation from './Infomation'

function IndexRecruitmentDetail({data,dataJobNew,lang}) {
    return (
        <>
            <BannerDetail dataBanner ={data?.recruimentDetail?.banner} />
            <Infomation lang={lang} dataJobNew={dataJobNew} dataContent ={data?.recruimentDetail?.content} />
        </>
    )
}

export default IndexRecruitmentDetail