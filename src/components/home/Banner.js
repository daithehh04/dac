import Image from 'next/image';
import React from 'react'
import imgBox from '@/assets/imgs/boxApp.svg'
import imgTitle from '@/assets/imgs/title-home.svg'
import imgText from '@/assets/imgs/Home_TextBanner.svg'

function Banner() {
  const imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/10/bg-home.jpg'
  // let styleBanner = {
  //   width: "100%",
  //   height: "100vh",
  //   backgroundImage: `url(${imgBanner})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat'
  // };
  return (
    <div className='banner relative md:w-full md:h-[100vh]'>
      <Image src={imgBanner} quality={100} alt='banner' fill className='w-full md:rounded-br-[13.54rem] md:h-full max-md:!h-[100vh] object-cover z-[-1]' />
      <div className="flex flex-col justify-center h-full content border-b border-solid border-[#888]">
        <div className='flex items-center justify-between max-md:flex-col'>
          <Image src={imgBox} width={'100%'} height={'100%'} alt='img' className='md:w-[40vw] max-md:mt-[18.52rem] md:h-[40vw] w-[74.3464rem] h-[73.89467rem] object-contain' />
          <h2 className='max-md:hidden' ><Image src={imgTitle} width={'100%'} height={'100%'} alt='img' /></h2>
          <h2 className='md:hidden relative left-[8rem]' ><Image src={imgText} width={'100%'} height={'100%'} className='w-[68rem] h-[13.93467rem] object-cover' alt='img' /></h2>
        </div>
        <p className='uppercase md:text-[1.25rem] text-[3.36rem] font-bold text-[#444] max-md:mt-[2.46rem] max-md:mb-[5.9rem] max-md:text-center'>KHÁCH HÀNG LUÔN LUÔN ĐÚNG</p>
      </div>
    </div>
  )
}

export default Banner