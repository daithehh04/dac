import React from 'react'
import banner from '@/assets/imgs/bannerDesign.png'
import Image from 'next/image'
function Banner() {

    return (
        <section className='md:w-full md:h-[100vh] relative' >
            <Image src={banner} alt="banner" quality={100} className="md:w-full md:h-full " />
            <div className='bg-overlay absolute inset-0 z-0 bg-blend-multiply'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1919" height="1015" viewBox="0 0 1919 1015" fill="none">
                    <path d="M0 0H1920V770.648C1920 905.6 1803.59 1015 1660 1015H0V0Z" fill="url(#paint0_linear_412_552)" />
                    <defs>
                        <linearGradient id="paint0_linear_412_552" x1="960" y1="0" x2="960" y2="1015" gradientUnits="userSpaceOnUse">
                            <stop offset="0.119792" stop-color="#444444" />
                            <stop offset="0.890625" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* text */}
            <div className='md:w-[45.375rem] absolute z-[1] md:bottom-[9.02rem] md:right-[3.29rem]'>
                <p className="md:text-[5.625rem] text-[#fff] font-bold uppercase md:leading-[116.662%] md:tracking-[-0.14063rem]">Thiết kế
                    <span className='md:text-[3.875rem] md:leading-[112.162%] md:tracking-[-0.09688rem]'> & </span>
                    <span className='font-normal md:text-[4.25rem] md:leading-[1.21] md:tracking-[-0.06375rem]'>Thành Công</span>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[3.1055rem] md:h-[2.6875rem] md:mt-[2rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

export default Banner
