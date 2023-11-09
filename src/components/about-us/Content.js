"use client"
import { useDataBanner } from './DataContext'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Content = () => {
  const [page, setPage] = useState(1)
  const context = useDataBanner()

  const data = [
    {
      id: 1,
      title: 'TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about-scaled.jpg'
    },
    {
      id: 2,
      title: 'CHẶNG ĐƯỜNG PHÁT TRIỂN',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about2-scaled.jpg'
    },
    {
      id: 3,
      title: 'CHỨNG CHỈ VÀ GIẢI THƯỞNG',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-ve-chung-toi-1-1.jpg'
    },
    {
      id: 4,
      title: 'SƠ ĐỒ TỔ CHỨC',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-ve-chung-toi-1-2-scaled.jpg'
    }
  ]
  const slugPage = [
    {
      name: 'journey'
    },
    {
      name: 'organize'
    },
    {
      name: 'prize'
    },
    {
      name: 'vision'
    }
  ]
  const handlePage = (page) => {
    setPage(page.id)
    context.setDataBanner(page)
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [page])
  return (
    <div className='max-md:hidden'>
      <ul className='flex content pt-[3.8rem]'>
        {data?.map((item, index) => (
          <Link
            href={`/about-us/${slugPage[index]?.name}`}
            key={index * Math.random()}
            className={`uppercase text-[1.04167rem] mr-[3.91rem] cursor-pointer ${page === index + 1 ? 'text-[#00A84F]' : ''}`}
            onClick={() => handlePage(item)}>
            {item?.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
