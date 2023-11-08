import React from 'react'
import banner from '@/assets/imgs/bannerService.png'
import Image from 'next/image'
function Banner() {
    return (
        <section className='banner-service md:w-full md:h-[100vh] h-[100rem] md:rounded-br-[13.54rem] rounded-br-[22rem]'>
            <Image src={banner} alt='banner' quality={100} priority className="w-full h-full max-md:rounded-br-[22rem]" />
        </section>
    )
}

export default Banner
