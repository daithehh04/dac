'use client'
import React, { useRef } from 'react'
import scrollDown from '@/hooks/scrollDown'
import Image from 'next/image'

function Banner({ image, title, description, classTitle, classDesc, positionAndBox, background, altText, id, textAboutUs, check }) {
    const scrollDownRef = useRef()

    return (
        <section id={id} className={`md:w-full md:h-[70vh] lg:h-[100vh] h-[100rem] relative ${background}`} >
            <Image src={image} priority alt={altText || 'banner'} width={1800} height={1000} quality={100} className="w-full h-full md:rounded-br-[13.54rem] rounded-br-[16rem] object-cover " />
            <div className="overlay absolute top-0 w-full h-[16rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
            {/* text */}
            <div className={`absolute z-[1] ${positionAndBox}`}>
                <p className={`text-[#fff] font-bold leading-[116.662%] max-md:mb-[1.2rem] md:tracking-[-0.14063rem] ${classTitle}`}>{title}</p>
                <p className={`font-normal text-[#fff] ${classDesc}`}>{description}</p>
                <svg onClick={() => scrollDown(scrollDownRef, 'start')} xmlns="http://www.w3.org/2000/svg" className='md:w-[3.1055rem] w-[6.66667rem] h-[5.86667rem] md:h-[2.6875rem] md:mt-[2rem] mt-[3.37rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z" fill="white" />
                </svg>
            </div>

            {/* text about-us */}
            <div className={`${check ? 'flex max-md:flex-row-reverse justify-center items-center absolute md:right-[12.24rem] md:bottom-[21.05rem] bottom-[13.27rem] max-md:left-[5rem]' : 'hidden'}`}>
                <h2 className='lg:text-[3.4375rem] text-[#fff] text-[4.5rem] max-md:text-[6.93333rem] max-md:w-[43rem] leading-[1.2] font-bold md:w-[30rem] lg:w-[25rem] text-start md:text-end'>{textAboutUs}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className='lg:w-[5.96302rem] md:w-[7rem] md:h-[9.7rem] lg:h-[7.69896rem] w-[11.20427rem] h-[13.9rem]' viewBox="0 0 115 147" fill="none">
                    <path d="M90.6717 112.427L115 143.476H93.2725L80.3633 127.121C75.1617 133.482 69.9059 138.124 64.5824 141.034C57.8907 144.797 49.9664 146.685 40.8094 146.685C26.0173 146.685 15.0587 141.758 7.9336 131.891C2.97582 125.02 0.510498 117.325 0.510498 108.821C0.510498 98.6985 2.56946 90.5068 6.6874 84.2458C10.8053 77.9849 19.0277 71.1561 31.3408 63.7593C26.0173 56.8169 22.4006 51.493 20.4771 47.8017C18.0659 43.0031 16.8604 37.807 16.8604 32.2275C16.8604 23.3401 19.5831 15.9717 25.0285 10.1367C31.097 3.64861 39.1433 0.397461 49.1672 0.397461C59.1911 0.397461 67.1832 3.50664 72.7505 9.73919C77.5729 15.0631 79.9976 21.7784 79.9976 29.8849C79.9976 38.7724 77.2071 46.595 71.6398 53.3386C68.4836 57.2287 63.0382 61.8995 55.2899 67.3512L80.3633 98.4004C81.9075 94.0561 82.9912 90.5494 83.6143 87.8945C84.2374 85.2396 84.9418 81.307 85.7546 76.1251H101.725C101.725 80.9237 100.763 86.4038 98.8534 92.5796C96.9299 98.7411 94.2072 105.357 90.6853 112.427H90.6717ZM71.6398 115.153L40.8094 75.7417C32.0859 81.5768 26.3289 86.1625 23.5385 89.4704C19.3257 94.3968 17.2261 100.431 17.2261 107.572C17.2261 115.551 20.4094 121.755 26.7894 126.156C31.5576 129.464 36.5967 131.125 41.9202 131.125C54.3688 131.125 64.2708 125.801 71.6398 115.167V115.153ZM46.5664 55.7805C51.8899 52.0893 55.6015 48.9091 57.7146 46.2401C61.67 41.5692 63.6613 36.5008 63.6613 31.0633C63.6613 25.6258 61.9545 21.1679 58.5545 18.513C56.0079 16.497 52.8923 15.5032 49.1807 15.5032C43.1122 15.5032 38.6827 17.5192 35.9058 21.537C34.1042 24.2061 33.2102 27.372 33.2102 31.0775C33.2102 35.0385 34.795 39.61 37.9512 44.8061C40.2405 48.5684 43.1257 52.2313 46.5935 55.8089L46.5664 55.7805Z" fill="white" />
                </svg>
            </div>
            <div ref={scrollDownRef}></div>
        </section>
    )
}

export default Banner
