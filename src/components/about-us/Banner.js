"use client"
import Image from 'next/image';
import React from 'react'
import imgTitle from '@/assets/imgs/title-banner-about.svg'
import { useDataBanner } from './DataContext';

function Banner() {
  const context = useDataBanner()
  let imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about-scaled.jpg'
  return (
    <div className='banner relative'>
      <Image src={context.dataBanner.background || imgBanner} alt="banner" quality={100} width={1000} height={1000} className="md:w-full md:h-[70vh] lg:h-[100vh] h-[100rem] rounded-br-[16rem] md:rounded-br-[13.54rem] object-cover" />
      <div className="flex flex-col justify-center h-full content">
        <div className='flex items-center absolute justify-end md:top-[50%] md:right-[4.58rem] max-md:left-[4.8rem] max-md:bottom-[13.27rem]'>
          {context.dataBanner?.id && <h2><Image src={imgTitle} width={'100%'} height={'100%'} alt='img' className='max-md:w-[68rem] max-md:h-[13.93467rem]' /></h2>}
        </div>
      </div>
      {context.dataBanner?.id && context.dataBanner?.id !== 1 && <div className="overlay absolute top-0 w-full h-[16rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>}
    </div>
  )
}

export default Banner