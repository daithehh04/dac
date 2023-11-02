import Image from 'next/image'
import React from 'react'

function Banner({ image, title, description, classTitle, classDesc, positionAndBox }) {
    return (
        <section className='md:w-full md:h-[100vh] relative ' >
            <Image src={image} priority alt="banner" quality={100} className="md:w-full md:h-full md:rounded-br-[13.54rem] object-cover " />
            <div className='bg-overlay_banner absolute md:w-full md:h-[15.625rem] top-0 bg-blend-multiply'>
            </div>
            {/* text */}
            <div className={`absolute z-[1] ${positionAndBox}`}>
                <p className={`text-[#fff] font-bold  md:leading-[116.662%] md:tracking-[-0.14063rem] ${classTitle}`}>{title}</p>
                <p className={`font-normal text-[#fff] ${classDesc}`}>{description}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[3.1055rem] md:h-[2.6875rem] md:mt-[2rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

export default Banner
