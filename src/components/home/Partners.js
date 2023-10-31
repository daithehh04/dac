import React from 'react'
import SlidePartners from './SlidePartners'
import fb from '@/assets/imgs/icon-f.svg'
import zalo from '@/assets/imgs/icon-z.svg'
import phone from '@/assets/imgs/icon-p.svg'
import Link from 'next/link'
import Image from 'next/image'

function Partners() {
  return (
    <div className='pt-[6.25rem] relative partner'>
      <h3 className='text-[2.5rem] text-[#444] font-bold leading-[1.16] text-center'>Các bạn hàng của APP</h3>
      <SlidePartners/>
      <div style={{background: 'linear-gradient(180deg, #FFF 0%, #CFEAE4 100%)'}}>
        <h3 className='text-[2.5rem] text-[#444] leading-[1.16] text-center mt-[14.48rem]'>Thông tin chi tiết</h3>
        <h3 className='pb-[12.81rem] flex justify-center'>
          <Link className='text-[5rem] text-[#444] font-bold leading-[1.16] text-center tracking-[-0.25rem] title-connect w-max' href={`#!`}>Hãy kết nối với chúng tôi</Link>
        </h3>
      </div>
      <div className='flex flex-col gap-[1.04rem] bg-[#A0A0A0] absolute right-0 top-[50%] -translate-y-1/2 px-[1rem] py-[1.5rem] rounded-bl-[1.97rem]'>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={phone} width={'100%'} height={'100%'} alt='phone'/>
        </Link>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={zalo} width={'100%'} height={'100%'} alt='zalo'/>
        </Link>
        <Link href={'#!'} className='transition-all hover:scale-95'>
          <Image className='w-[3.425rem] h-[3.425rem] object-cover' src={fb} width={'100%'} height={'100%'} alt='facebook'/>
        </Link>
      </div>
    </div>
  )
}

export default Partners