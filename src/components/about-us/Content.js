"use client"
import IndexVision from './about-vision/IndexVision'
import IndexJourney from './about-journey/IndexJourney'
import { IndexPrize } from './about-prize/IndexPrize'
import { IndexOrganize } from './about-organize/IndexOrganize'
import { useDataBanner } from './DataContext'
import { useEffect, useState } from 'react'

export const Content = () => {
  const [page,setPage] = useState(1)
  const { dataBanner, setDataBanner } = useDataBanner('')
  const data = [
    {
      id:1,
      title: 'TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about-scaled.jpg'
    },
    {
      id:2,
      title: 'CHẶNG ĐƯỜNG PHÁT TRIỂN',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about2-scaled.jpg'
    },
    {
      id:3,
      title: 'CHỨNG CHỈ VÀ GIẢI THƯỞNG',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-ve-chung-toi-1-1.jpg'
    },
    {
      id:4,
      title: 'SƠ ĐỒ TỔ CHỨC',
      background: 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-ve-chung-toi-1-2-scaled.jpg'
    }
  ]
  const handlePage = (page) => {
    setPage(page.id)
    setDataBanner(page)
  }
  useEffect(() => {
    window.scroll(0,0)
  },[page])
  return (
    <div>
      <ul className='flex content pt-[3.8rem]'>
        {data?.map((item,index) => (
          <li key={index*Math.random()} className={`uppercase text-[1.04167rem] mr-[3.91rem] cursor-pointer ${page === index+1 ? 'text-[#00A84F]': ''}`} onClick={() => handlePage(item)}>{item?.title}</li>
        ))}
      </ul>
      {page === 1 && <IndexVision/>}
      {page === 2 && <IndexJourney/>}
      {page === 3 && <IndexPrize/>}
      {page === 4 && <IndexOrganize/>}
    </div>
  )
}
