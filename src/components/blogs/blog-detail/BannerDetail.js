import Banner from '@/components/common/Banner'
import React from 'react'
import image from '@/assets/imgs/BlogDetailBanner.png'
function BannerDetail() {
    return (
        <Banner
            image={image}
            title={'Hành trình 60 năm 1963 - 2023'}
            description={'Chuỗi sự kiện kỷ niệm APP'}
            classTitle={'md:text-[3.4375rem]'}
            classDesc={'md:text-[1.875rem]'}
            positionAndBox={'md:w-[31.45833rem] md:right-[11.72rem] md:bottom-[2rem]'}
        />
    )
}

export default BannerDetail
