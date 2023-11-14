import React from 'react'
import Image from 'next/image'

function Design({ lang, dataDesign }) {
  return (
    <div className='design md:pt-[3.56rem] pt-[6.93rem]'>
      <div className='md:ml-auto md:w-[65.4375rem] md:pr-[14.44rem] max-md:px-[4.27rem]'>
        <h3 dangerouslySetInnerHTML={{ __html: `${dataDesign?.heading}` }} className='md:text-[3.4375rem] text-[6.93333rem] text-[#444] leading-[1.2] md:tracking-[-0.12375rem] tracking-[-0.208rem] title'>
        </h3>
        <ul className='md:grid grid-cols-2 list-content gap-x-[3.19rem] gap-y-[1.87rem] mt-[3.25rem] flex flex-col'>
          {dataDesign?.aboutCompany?.map((item, index) => (
            <li key={index} className={`text-[1.35417rem] md:pt-[2.19vw] pt-[4.8rem] border-t border-solid max-md:pb-[4rem] border-[#888] ${index === 0 ? 'max-md:border-none' : ''}`}>
              <h4 className='font-bold text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] mb-[1.35417vw]'>{item?.title}</h4>
              <p className='text-[#888] md:text-[1.5rem] tracking-[-0.04063rem] lg:text-[1.35417rem] text-[4.26667rem] text-justify'>{item?.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex md:px-[9.43rem] mt-[5.4rem] md:gap-[5.16rem] items-center max-md:flex-col'>
        <div className="left md:w-[36.7rem] max-md:bg-[#444545] flex flex-col items-center">

          <div class="scrolling-words-container">
            <div class="scrolling-words-box">
              <ul>
                {dataDesign?.textAnimation?.listTextScroll?.map((item, index) => (
                  <li className='list-none md:text-[4rem] text-[8.53333rem] md:text-[#888] text-[#fff] uppercase' key={index}>{item?.text}</li>
                ))}
              </ul>
            </div>
            <div className='flex text-[#fff] justify-center block-scroll-word font-bold items-end w-full'>
              <span className='text-[8.53333rem] md:text-[4rem] uppercase md:text-[#444] leading-[1.2] max-md:w-[60rem] relative max-md:bottom-[-2rem]'>{dataDesign?.textAnimation?.textOnTop}</span>
              <span className='text-[22.93333rem] max-md:hidden md:text-[2rem] md:text-[#444] relative md:bottom-[0.25rem] leading-[1.2]'>&</span>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: `${dataDesign?.textAnimation?.description}` }}
            className='md:text-[1.5rem] md:mt-[1rem] tracking-[-0.06771rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] max-md:text-[#fff] max-md:my-[6rem] max-md:px-[4.27rem] text-justify' >
          </p>
        </div>
        <div className="right">
          <Image src={dataDesign?.textAnimation?.image?.sourceUrl} width={500} height={500} alt='box' className='md:w-[39.27rem] md:h-[47.76rem] h-[67.46667rem] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Design