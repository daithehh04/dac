import React from 'react'
import banner from '@/assets/imgs/bannerService.png'
import Image from 'next/image'
function Banner() {
    return (
        <section className='banner-service md:w-full md:h-[100vh] md:rounded-br-[13.54rem]'>
            <Image src={banner} alt='banner' quality={100} priority className="md:w-full md:h-full" />
        </section>
    )
}

export default Banner
