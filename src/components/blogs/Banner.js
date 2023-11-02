import React from 'react'
import BannerCom from '../common/Banner'
import imgBanner from '@/assets/imgs/bannerNews.png'
function Banner() {
    return (
        <BannerCom
            image={imgBanner}
            title={'Tin tức mới nhất'}
            description={'Cập nhật hàng'}
            classTitle={'md:text-[3.4375rem]'}
            classDesc={'md:text-[1.875rem] md:tracking-[-0.05625rem]'}
            positionAndBox={'md:right-[8.85rem] md:bottom-[6.72rem] md:w-[28.64583rem] md:h-[9.6875rem]'}
        />
    )
}

export default Banner
