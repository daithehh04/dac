"use client"
import { useDataBanner } from './DataContext'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Content = ({data1,data2,data3,data4,lang}) => {
  const [page, setPage] = useState(1)
  const context = useDataBanner()
  let dataVision = data1?.data?.page?.translation
  let dataPrize = data2?.data?.page?.translation
  let dataJourney = data3?.data?.page?.translation
  let dataOrganize = data4?.data?.page?.translation
  
  const slugVision = dataVision?.slug
  const slugPrize = dataPrize?.slug
  const slugJourney = dataJourney?.slug
  const slugOrganize = dataOrganize?.slug
  const data = [
    {
      id: 1,
      title: dataVision?.vision?.tilePage,
      background: dataVision?.vision?.banner?.imagebanner?.sourceUrl
    },
    {
      id: 2,
      title: dataJourney?.journey?.banner?.titlePage,
      background: dataJourney?.journey?.banner?.imagebanner?.sourceUrl,
      text:dataJourney?.journey?.banner?.textbanner
    },
    {
      id: 3,
      title: dataPrize?.prize?.titlePage,
      background: dataPrize?.prize?.banner?.imagebanner?.sourceUrl,
      text:dataPrize?.prize?.banner?.textbanner
    },
    {
      id: 4,
      title: dataOrganize?.organize?.titlePage,
      background: dataOrganize?.organize?.banner?.imagebanner?.sourceUrl,
      text:dataOrganize?.organize?.banner?.textbanner
    }
  ]
  let slugPage = [slugVision,slugJourney,slugPrize,slugOrganize]
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
            href={`/${lang}/about-us/${slugPage[index]}`}
            key={index * Math.random()}
            className={`uppercase lg:text-[1.04167rem] md:text-[1.3rem] mr-[3.91rem] cursor-pointer ${page === index + 1 ? 'text-[#00A84F]' : ''}`}
            onClick={() => handlePage(item)}>
            {item?.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
