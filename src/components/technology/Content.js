'use client'
import React, { useEffect, useState } from 'react'
import { useDataBanner } from './DataContext'
import Link from 'next/link'
function Content() {
    const [page, setPage] = useState(1)
    const context = useDataBanner()
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

    const slugPage = [
        {
            name: 'offset'
        },
        {
            name: 'flexo'
        },
        {
            name: 'gravure'
        },
        {
            name: 'digital'
        },
        {
            name: 'other-printing'
        }
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
            <ul className='flex pt-[3.8rem] md:pl-[12.03rem] bg-[#F5F5F5]'>
                {data?.map((item, index) => {
                    return (
                        <Link href={`/technology/${slugPage[index]?.name}`} key={index * Math.random()} className={`uppercase  text-[1.04167rem] mr-[1.67rem] cursor-pointer ${page === index + 1 ? 'text-[#00A84F]' : ''}`} onClick={() => handlePage(item)}>{item?.title}</Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content