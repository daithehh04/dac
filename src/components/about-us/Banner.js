"use client"
import Image from 'next/image';
import React from 'react'
import imgTitle from '@/assets/imgs/title-banner-about.svg'
import { useDataBanner } from './DataContext';

function Banner() {
  const { dataBanner } = useDataBanner()
  let imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/banner-about-scaled.jpg'
  let styleBanner = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${dataBanner.background || imgBanner })`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className='banner rounded-br-[13.54rem] relative' style={styleBanner}>
      <div className="flex flex-col justify-center h-full content">
        <div className='flex items-center justify-end mr-[4.58rem]'>
          {dataBanner?.id && dataBanner?.id === 1 && <h2><Image src={imgTitle} width={'100%'} height={'100%'} alt='img'/></h2>}
        </div>
      </div>
      {dataBanner?.id && dataBanner?.id !== 1 && <div className="overlay absolute top-0 w-full h-[16rem]" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)'}}></div>}
    </div>
  )
}

export default Banner