"use client"
import Image from 'next/image';
import React from 'react'
import { useDataBanner } from './DataContext';

function Banner() {
    const { dataBanner } = useDataBanner()
    console.log({ dataBanner });
    let imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner1.png'
    let styleBanner = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${dataBanner.background || imgBanner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className='banner w-full h-[100vh] relative '>
            <div className='absolute inset-0 bg-[#F5F5F5]'></div>
            <Image src={dataBanner?.background || imgBanner} quality={100} alt='banner' fill className='w-full  rounded-br-[13.54rem] h-full object-cover z-[0]' />
            <div className='flex flex-col justify-end absolute right-[14.17rem] bottom-[5.9rem]'>
                <h2 className='md:w-[30.3125rem] text-[#fff] md:text-[3.4375rem] font-bold md:leading-[116.662%]'>{dataBanner?.text || 'Công nghệ in Offset'}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:mt-[2rem] md:w-[2.67969rem] md:h-[2.23958rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 32.2278L43 21.24L25.0162 35.8564L25.0162 0.913573L17.9911 0.913573L17.9911 35.8564L2.91626e-06 21.24L2.43059e-06 32.2278L21.5 49.6953L43 32.2278Z" fill="white" />
                </svg>
            </div>
            <div className="overlay absolute top-0 w-full h-[16rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
        </div>
    )
}

export default Banner