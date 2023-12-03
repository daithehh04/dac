'use client'
import React from 'react'
import SlidePartners from './SlidePartners'
import fb from '@/assets/imgs/fb2.svg'
import zalo from '@/assets/imgs/zalo2.svg'
import phone from '@/assets/imgs/phone2.svg'
import linked from '@/assets/imgs/linked.svg'
import Link from 'next/link'

import Image from 'next/image'

function Partners({ dataPartner }) {
  return (
    <div className='pt-[6.25rem] relative partner'>
      <h3 className='md:text-[2.5rem] text-[6.93333rem] text-[#444] font-bold leading-[1.16] text-center max-md:mb-[15rem]'>{dataPartner?.title}</h3>
      <SlidePartners data={dataPartner?.listPartners} />
      <div style={{ background: 'linear-gradient(180deg, #FFF 0%, #CFEAE4 100%)' }}>
        <h3 className='md:text-[2.5rem] text-[4.26667rem] text-[#444] leading-[1.16] text-center md:mt-[14.48rem] mt-[22.3rem] '>{dataPartner?.subtitle}</h3>
        <h3 className='pb-[12.81rem] flex justify-center'>
          <Link className='md:text-[5rem] text-[6.93333rem] max-md:mt-[4rem] text-[#444] font-bold leading-[1.16] text-center tracking-[-0.25rem] title-connect w-max' href={`#!`}>{dataPartner?.heading}</Link>
        </h3>
      </div>
      <div className='max-md:hidden popUpAction flex flex-col gap-[1.04rem] bg-[#A0A0A0] fixed z-50 right-0 top-[60%] -translate-y-[30%] px-[1rem] py-[1.5rem] rounded-bl-[1.97rem]'>
        <Link href={`tel:${dataPartner?.socialAction?.phone}`} className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={phone} width={'100%'} height={'100%'} alt='phone' />
        </Link>
        <Link href={`${dataPartner?.socialAction?.facebook}`} target='_blank' className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={fb} width={'100%'} height={'100%'} alt='facebook' />
        </Link>
        <Link href={`${dataPartner?.socialAction?.zalo}`} target='_blank' className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={zalo} width={'100%'} height={'100%'} alt='zalo' />
        </Link>
        <Link href={`${dataPartner?.socialAction?.linkedin}`} target='_blank' className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={linked} width={'100%'} height={'100%'} alt='facebook' />
        </Link>
      </div>
    </div>
  )
}

export default Partners