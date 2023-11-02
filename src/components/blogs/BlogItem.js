import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogItem({ image, title, desc }) {
    return (
        <Link href={'/blog/a'} className='flex flex-col relative justify-center items-center'>
            {/* <div className='absolute inset-0 z-[-1] blogItemOverlay'></div> */}
            <Image src={image} alt='imgItem' quality={100} className='md:w-[20.98958rem] md:h-[28.02083rem] object-cover' />
            <h4 className='description md:mt-[1.35rem]'>{title}</h4>
            <span className='subDescription'>{desc}</span>
        </Link>
    )
}

export default BlogItem
