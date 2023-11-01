import Image from 'next/image'
import React from 'react'

function ProductItem({ image, text }) {
    return (
        <div className='relative'>
            <Image src={image} alt='image' quality={100} className="md:h-[29.0625rem] md:w-[20.98958rem] object-cover" />
            <span className='absolute z-[1] md:bottom-[2.86rem] md:left-[2.34rem] md:right-[3.85rem] md:w-[14.79167rem] text-[#fff] font-bold md:text-[1.875rem] md:leading-[116.662%] md:tracking-[-0.05625rem] md:h-[3.85417rem]'>{text}</span>
        </div>
    )
}

export default ProductItem
