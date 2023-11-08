import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/imgs/Flexo1.png'
import img2 from '@/assets/imgs/Flexo2.png'
function ListProduct() {
    return (
        <section className='md:pt-[6.04rem] pt-[4.27rem] max-md:px-[4.27rem] flex md:px-[12.03rem] md:pb-[6.35rem] max-md:flex-col'>
            <Image src={img1} alt='image' quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] md:hidden mb-[7.47rem] object-cover md:mb-[1.93rem]' />
            <div className='flex flex-col md:w-[36.66667rem] md:mr-[2.6rem]'>
                <h2 className='heading md:mb-[1.77rem] mb-[3rem] max-md:!text-[6.93333rem] md:pr-[11.87rem]'>Các máy Flexo tại App</h2>
                <div className='description !font-normal md:!tracking-[-0.02708rem]'>
                    <p className='md:mb-[1.77rem] mb-[5rem]'>
                        Công ty sở hữu máy Flexo 4 màu, Flexo 6 màu (UV + khí nóng) xuất xứ Đức, Anh Quốc:
                    </p>
                    <ul className='md:pl-[2rem] pl-[8rem] max-md:pb-[7rem]'>
                        <li className='list-disc'>Máy in Gallus EM 410 (UV + IR)</li>
                        <li className='list-disc'>Máy in GMáy in KaDo 220 System (UV)</li>
                        <li className='list-disc'>Máy in Mark Andy 2200 system (UV)</li>
                    </ul>
                </div>
            </div>
            <div className='max-md:mb-[4.27rem]'>
                <Image src={img1} alt='image' quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] max-md:hidden object-cover md:mb-[1.93rem]' />
                <Image src={img2} alt='image' quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] object-cover' />
            </div>
        </section>
    )
}

export default ListProduct