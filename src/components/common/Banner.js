import Image from 'next/image'
import React from 'react'

function Banner({ image, title, description, classTitle, classDesc, positionAndBox, background }) {
    return (
        <section className={`md:w-full md:h-[100vh] h-[100rem] relative ${background}`} >
            <Image src={image} priority alt="banner" quality={100} className="w-full h-full md:rounded-br-[13.54rem] rounded-br-[16rem] object-cover " />

            <div className="overlay absolute top-0 w-full h-[16rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
            {/* text */}
            <div className={`absolute z-[1] ${positionAndBox}`}>
                <p className={`text-[#fff] font-bold leading-[116.662%] max-md:mb-[1.2rem] md:tracking-[-0.14063rem] ${classTitle}`}>{title}</p>
                <p className={`font-normal text-[#fff] ${classDesc}`}>{description}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[3.1055rem] w-[6.66667rem] h-[5.86667rem] md:h-[2.6875rem] md:mt-[2rem] mt-[3.37rem]' viewBox="0 0 43 50" fill="none">
                    <path d="M43 31.8963L43 20.7042L25.0162 35.5923L25.0162 -7.2201e-07L17.9911 -1.00405e-06L17.9911 35.5923L2.82936e-06 20.7042L2.29671e-06 31.8962L21.5 49.6884L43 31.8963Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

export default Banner
