'use client'
import React, { useRef } from 'react'
import banner from '@/assets/imgs/bannerDesign.png'
import Image from 'next/image'
import scrollDown from '@/hooks/scrollDown'
function Banner({ data }) {
    const scrollDownRef = useRef()
    return (
        <section className='md:w-full md:h-[70vh] lg:h-[100vh] h-[100rem] relative' >
            <Image src={data?.background?.sourceUrl || banner} width={1600} height={1000} alt={data?.background?.altText || 'banner'} quality={100} className="w-full h-full object-cover md:rounded-br-[13.54rem] rounded-br-[16rem]" />
            <div className="overlay absolute top-0 w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
            {/* text PC */}
            <div className='md:w-[45.375rem] max-md:h-fit w-[60rem] max-md:left-[4.27rem] absolute z-[1] md:bottom-[9.02rem] bottom-[3rem] md:right-[3.29rem]'>
                <p className="md:text-[5.625rem] text-[8rem] text-[#fff] font-bold uppercase md:leading-[116.662%] md:tracking-[-0.14063rem]">{data?.title}
                    <span className='md:text-[3.875rem] md:leading-[112.162%] md:tracking-[-0.09688rem]'> & </span>
                    <span className='font-normal md:text-[4.25rem] md:leading-[1.21] md:tracking-[-0.06375rem]'>{data?.subtitle}</span>
                </p>
                <svg onClick={() => scrollDown(scrollDownRef, 'start')} xmlns="http://www.w3.org/2000/svg" className='md:w-[3.1055rem] md:h-[2.6875rem] w-[6.66667rem] h-[5.86667rem] md:mt-[2rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z" fill="white" />
                </svg>
            </div>
            <div ref={scrollDownRef}></div>
        </section>
    )
}

export default Banner
