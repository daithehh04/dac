'use client'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'
import Image from 'next/image'
import { useState } from 'react'

export const IndexPrize = ({ data, lang, slugPage, titlePage }) => {
  const dataPrize = data?.data?.page?.translation
  const [active,setActive] = useState(-1)

  const handleClick = (num) => {
    if(num === active) {
      setActive(-1)
    }else{
      setActive(num)
    }
  }
  console.log(active);
  return (
    <section>
      <Banner
        image={dataPrize?.prize?.banner?.imagebanner?.sourceUrl}
        altText={dataPrize?.prize?.banner?.imagebanner?.altText}
        textAboutUs={dataPrize?.prize?.banner?.textbanner}
        check={true}
      />
      <TitlePage_About_Us check={2} slugPage={slugPage} titlePage={titlePage} lang={lang} />
      <div className='md:px-[9.46rem] px-[4.27rem] mt-[4.32rem] pb-[15.4rem]'>
        <h2 className='heading relative md:left-[1.8rem] max-md:w-[70%]'>{dataPrize?.prize?.content?.heading}</h2>
        <div className='md:flex grid grid-cols-2 justify-center flex-wrap md:mt-[3.2rem] mt-[15rem] md:gap-[5.5rem] max-md:gap-x-[8rem] max-md:gap-y-[12.8rem] justify-items-center'>
          {dataPrize?.prize?.content?.listPrize?.map((item, index) => (
            <div key={index * Math.random()} title={item?.image?.altText || lang === 'vi' ? 'giải thưởng' : 'prize' } className={`flex flex-col relative items-center justify-center ${index === dataPrize?.prize?.content?.listPrize?.length -1 ? 'md:w-[38.11422rem] md:h-[28.125rem] w-full ' : 'md:w-[14.89vw]  w-[41.86667rem]'} ${index === dataPrize?.prize?.content?.listPrize?.length -1 ? 'col-span-2' : '' }`}>
                <div 
                  onClick={() => handleClick(index)} 
                  className={`overflow-hidden card_image w-full h-full ${active === index && (index === 0 || index === 1 || index === 2 || index === 3) 
                  ? 
                  'active1 md:w-[34.85rem] md:h-[46.82rem] md:absolute z-[10] max-md:!w-[100rem] max-md:!h-[130rem] fixed max-md:top-[50%] max-md:left-[50%] max-md:-translate-y-1/2 max-md:-translate-x-1/2' 
                  : 
                  (active === index && (index === 4 || index === 5 || index === 6 || index ===7))  
                  ? 
                  'active2 md:w-[35.07rem] md:h-[26.875rem] md:absolute z-[10]  max-md:!w-[100rem] max-md:!h-[76rem] fixed max-md:top-[50%] max-md:left-[50%] max-md:-translate-y-1/2 max-md:-translate-x-1/2' 
                  : (active === index && index === dataPrize?.prize?.content?.listPrize?.length -1) 
                  ? 'active3 md:w-[84.16667rem] md:h-[50.8333rem] bg-[#DCDCDC] md:absolute z-[10]  max-md:!w-[100rem] max-md:!h-[76rem] fixed max-md:top-[50%] max-md:left-[50%] max-md:-translate-y-1/2 max-md:-translate-x-1/2' 
                  : 'relative'}`}
                >
                  <Image src={item?.image?.sourceUrl} width={1800} height={1000} quality={100} alt={item?.image?.altText || 'prize'} className={`image_prize ${index === active ? 'active' : ''}  object-cover w-full h-full`} />
                  <div 
                    className={`${active === index ? 'active' : ''} description_prize ${( active === index  && (index === 0 || index === 1 || index === 2 || index === 3) 
                    ? 'right-[4.5rem] md:right-[1.45rem] md:!bottom-[2.4rem] max-md:!bottom-[5.7rem]' 
                    : (active === index && (index === 4 || index === 5 || index === 6 || index === 7)) 
                    ? 'md:right-[1.5rem] right-[4.3rem] md:!bottom-[1rem] max-md:!bottom-[2.8rem]' 
                    : index ===  dataPrize?.prize?.content?.listPrize?.length -1 
                    ? '!bottom-[0] md:!px-[10rem] md:!py-[7rem]' 
                    : '')}`}
                  >
                  <div 
                    className={`md:text-[1.35417rem] text-[4.26667rem] leading-[1.2] text-[#fff]`}
                    dangerouslySetInnerHTML={{ __html: `${item?.description}` }}
                  ></div>
                  </div>
                </div>
              {item?.name && <span className={`md:text-[1.6rem] text-[4.26667rem] whitespace-nowrap max-md:leading-[111.662%] max-md:tracking-[-0.14933rem] text-[#888] mt-[1.5rem]  ${active === index ? 'hidden' :''}`}>{item?.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
