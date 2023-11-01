import React from 'react'
import banner from '@/assets/imgs/bannerService.png'
import Image from 'next/image'
function Banner() {
    return (
        <section className='banner-service md:w-full md:h-[100vh]'>
            <Image src={banner} alt='banner' quality={100} priority className="md:w-full md:h-full object-cover" />
        </section>
    )
}

export default Banner
