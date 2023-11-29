'use client'
import React, { useEffect, useRef, useState } from 'react'
import SlidePartners from './SlidePartners'
import fb from '@/assets/imgs/icon-f.svg'
import zalo from '@/assets/imgs/icon-z.svg'
import phone from '@/assets/imgs/icon-p.svg'
import Link from 'next/link'
import vector_1 from '@/assets/imgs/vector_1.svg'
import vector_2 from '@/assets/imgs/vector_2.svg'

import Image from 'next/image'

function Partners({ dataPartner }) {
  const popUpRef = useRef()
  const arrowRef = useRef()
  const [active,setActive] = useState(false)
  // const handleCLick = () => {
  //   window.scrollTo(0, 0, { behavior: 'smooth' })
  // }
  const handleClose = () => {
      if(popUpRef && popUpRef.current.style.transform === 'translateX(0%)' && arrowRef.current){
        popUpRef.current.style.transform = 'translateX(102%)'
        arrowRef.current.style.rotate = '0deg'
        setActive(false)
      } else{
        popUpRef.current.style.transform = 'translateX(0%)'
        arrowRef.current.style.rotate = '180deg'
        setActive(true)
      }
  }

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
      <div ref={popUpRef} className='max-md:hidden popUpAction flex flex-col gap-[1.04rem] bg-[#A0A0A0] fixed z-50 right-0 top-[60%] -translate-y-[30%] px-[1rem] py-[1.5rem] rounded-bl-[1.97rem]'>
        <Link href={`tel:${dataPartner?.socialAction?.phone}`} className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={phone} width={'100%'} height={'100%'} alt='phone' />
        </Link>
        <Link href={`${dataPartner?.socialAction?.zalo}`} target='_blank' className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={zalo} width={'100%'} height={'100%'} alt='zalo' />
        </Link>
        <Link href={`${dataPartner?.socialAction?.facebook}`} target='_blank' className='transition-all hover:scale-95'>
          <Image className='w-[2.86458rem] h-[2.91667rem] object-contain' src={fb} width={'100%'} height={'100%'} alt='facebook' />
        </Link>
        {/* <Image onClick={handleClose} src={arrow_right} alt='arrow'  /> */}
        <div onClick={handleClose} className='w-[1.35417rem] absolute h-[2.13542rem] top-[0] left-[-1.35rem]'>
          <div className='relative w-[1.35417rem] h-[2.13542rem]'>
            <Image src={vector_2} alt='box' className='w-[1.35417rem]  h-[2.13542rem] ' /> 
            <Image ref={arrowRef} src={vector_1} alt='box' className={`absolute w-[0.5rem] h-[0.75rem] top-[50%] left-[50%] ${active ? 'translate-x-1/2 translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'}  `} /> 
          </div>
        </div>
      </div>
        

      
      
    </div>
  )
}

export default Partners