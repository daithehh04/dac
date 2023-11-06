import React from 'react'
import BannerCom from '../../common/Banner'
import imgBanner from '@/assets/imgs/RecruitmentBanner.png'
function BannerDetail() {
    return (
        <BannerCom
            background={'bg-[#F5F5F5]'}
            image={imgBanner}
            title={'Tuyển dụng'}
            description={'Các vị trí tuyển dụng'}
            classTitle={'md:text-[3.4375rem]'}
            classDesc={'md:text-[1.875rem] md:tracking-[-0.05625rem]'}
            positionAndBox={'md:right-[9.9rem] md:bottom-[4.72rem] md:w-[28.64583rem] md:h-[9.6875rem]'}
        />
    )
}

export default BannerDetail