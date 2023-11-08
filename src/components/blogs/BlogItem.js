import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogItem({ image, title, desc }) {
    return (
        <Link href={'/blog/a'} className='flex flex-col relative justify-center items-center'>
            <Image src={image} alt='imgItem' quality={100} className='md:w-[20.98958rem] w-full h-[91.46667rem] md:h-[28.02083rem] object-cover' />
            <div className='flex flex-col justify-center items-center max-md:mt-[3.47rem] max-md:mb-[7rem] max-md:flex-col-reverse'>
                <h4 className='description md:mt-[1.35rem] max-md:!text-[6.93333rem]'>{title}</h4>
                <span className='subDescription '>{desc}</span>
            </div>
        </Link>
    )
}

export default BlogItem
