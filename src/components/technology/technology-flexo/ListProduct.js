import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/imgs/Flexo1.png'
import img2 from '@/assets/imgs/Flexo2.png'
function ListProduct() {
    return (
        <section className='md:pt-[6.04rem] flex md:px-[12.03rem] md:pb-[6.35rem]'>
            <div className='flex flex-col md:w-[36.66667rem] md:mr-[2.6rem]'>
                <h2 className='heading md:mb-[1.77rem] md:pr-[11.87rem]'>Các máy Flexo tại App</h2>
                <div className='description !font-normal md:!tracking-[-0.02708rem]'>
                    <p className='md:mb-[1.77rem]'>
                        Công ty sở hữu máy Flexo 4 màu, Flexo 6 màu (UV + khí nóng) xuất xứ Đức, Anh Quốc:
                    </p>
                    <li className='list-disc'>Máy in Gallus EM 410 (UV + IR)</li>
                    <li className='list-disc'>Máy in GMáy in KaDo 220 System (UV)</li>
                    <li className='list-disc'>Máy in Mark Andy 2200 system (UV)</li>
                </div>
            </div>
            <div>
                <Image src={img1} alt='image' quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] object-cover md:mb-[1.93rem]' />
                <Image src={img2} alt='image' quality={100} width={1000} height={1000} className='md:w-[36.66667rem] md:h-[22.1875rem] object-cover' />
            </div>
        </section>
    )
}

export default ListProduct