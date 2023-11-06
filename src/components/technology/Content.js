'use client'
import React, { useEffect, useState } from 'react'
import { useDataBanner } from './DataContext'
import img1 from '@/assets/imgs/TechnologyBanner1.png'
import img2 from '@/assets/imgs/TechnologyBanner2.png'
import img3 from '@/assets/imgs/TechnologyBanner3.png'
import img4 from '@/assets/imgs/TechnologyBanner4.png'
import img5 from '@/assets/imgs/TechnologyBanner5.png'
import IndexOffset from './technology-offset/IndexOffset'
import IndexFlexo from './technology-flexo/IndexFlexo'
import IndexGravure from './technology-gravure/IndexGravure'
import IndexDigital from './technology-digital/IndexDigital'
import IndexOtherPrinting from './technology-otherPrinting/IndexOtherPrinting'
function Content() {
    const [page, setPage] = useState(1)
    const { dataBanner, setDataBanner } = useDataBanner('')
    const data = [
        {
            id: 1,
            title: 'CÔNG NGHỆ IN OFFSET',
            background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner1.png',
            text: 'Công nghệ in Offset'
        },
        {
            id: 2,
            title: 'CÔNG NGHỆ IN FLEXO',
            background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner2.png',
            text: 'Công nghệ in Flexo'
        },
        {
            id: 3,
            title: 'CÔNG NGHỆ IN ỐNG ĐỒNG',
            background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner3.png',
            text: 'Công nghệ in Ống Đồng'
        },
        {
            id: 4,
            title: 'CÔNG NGHỆ IN KỸ THUẬT SỐ',
            background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner4.png',
            text: 'CÔNG NGHỆ IN KỸ THUẬT SỐ'
        },
        {
            id: 5,
            title: 'CÔNG NGHỆ IN KHÁC',
            background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner5.png',
            text: 'Giải pháp chống giả'
        }
    ]

    const handlePage = (page) => {
        setPage(page.id)
        setDataBanner(page)
    }
    useEffect(() => {
        window.scroll(0, 0)
    }, [page])
    return (
        <div>
            <ul className='flex pt-[3.8rem] md:pl-[12.03rem] bg-[#F5F5F5]'>
                {data?.map((item, index) => (
                    <li key={index * Math.random()} className={`uppercase  text-[1.04167rem] mr-[1.67rem] cursor-pointer ${page === index + 1 ? 'text-[#00A84F]' : ''}`} onClick={() => handlePage(item)}>{item?.title}</li>
                ))}
            </ul>
            {page === 1 && <IndexOffset />}
            {page === 2 && <IndexFlexo />}
            {page === 3 && <IndexGravure />}
            {page === 4 && <IndexDigital />}
            {page === 5 && <IndexOtherPrinting />}

        </div>
    )
}

export default Content