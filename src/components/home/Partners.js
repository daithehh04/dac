import React from 'react'
import SlidePartners from './SlidePartners'
import Link from 'next/link'
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
    </div>
  )
}

export default Partners