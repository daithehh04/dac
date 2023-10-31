import Image from 'next/image';
import React from 'react'
import imgBox from '@/assets/imgs/boxApp.svg'
import imgTitle from '@/assets/imgs/title-home.svg'

function Banner() {
  const imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/bg-home.jpg'
  let styleBanner = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imgBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className='banner' style={styleBanner}>
      <div className="flex flex-col justify-center h-full content border-b border-solid border-[#888]">
        <div className='flex items-center justify-between'>
          <Image src={imgBox} width={'100%'} height={'100%'} alt='img' className='w-[40vw] h-[40vw] object-contain'/>
          <h2><Image src={imgTitle} width={'100%'} height={'100%'} alt='img'/></h2>
        </div>
        <p className='uppercase text-[1.25vw] font-bold text-black'>KHÁCH HÀNG LUÔN LUÔN ĐÚNG</p>
      </div>
    </div>
  )
}

export default Banner