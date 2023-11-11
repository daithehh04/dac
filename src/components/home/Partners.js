import React from 'react'
import SlidePartners from './SlidePartners'
import fb from '@/assets/imgs/icon-f.svg'
import zalo from '@/assets/imgs/icon-z.svg'
import phone from '@/assets/imgs/icon-p.svg'
import Link from 'next/link'
import Image from 'next/image'

function Partners({ dataPartner }) {
  return (
    <div className='pt-[6.25rem] relative partner'>
      <h3 className='md:text-[2.5rem] text-[6.93333rem] text-[#444] font-bold leading-[1.16] text-center max-md:mb-[15rem]'>{dataPartner?.title}</h3>
      <SlidePartners data={dataPartner?.listPartners} />
      <div style={{ background: 'linear-gradient(180deg, #FFF 0%, #CFEAE4 100%)' }}>
        <h3 className='md:text-[2.5rem] text-[4.26667rem] text-[#444] leading-[1.16] text-center md:mt-[14.48rem] mt-[22.3rem] '>{dataPartner?.subTitle}</h3>
        <h3 className='pb-[12.81rem] flex justify-center'>
          <Link className='md:text-[5rem] text-[6.93333rem] max-md:mt-[4rem] text-[#444] font-bold leading-[1.16] text-center tracking-[-0.25rem] title-connect w-max' href={`#!`}>{dataPartner?.heading}</Link>
        </h3>
      </div>
      <div className='max-md:hidden flex flex-col gap-[1.04rem] bg-[#A0A0A0] absolute right-0 top-[50%] -translate-y-1/2 px-[1rem] py-[1.5rem] rounded-bl-[1.97rem]'>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={phone} width={'100%'} height={'100%'} alt='phone' />
        </Link>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={zalo} width={'100%'} height={'100%'} alt='zalo' />
        </Link>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={fb} width={'100%'} height={'100%'} alt='facebook' />
        </Link>
      </div>
    </div>
  )
}

export default Partners