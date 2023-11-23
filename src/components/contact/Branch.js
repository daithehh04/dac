import React from 'react'
import svg from '@/assets/imgs/GroupContact.svg'
import Image from 'next/image'
function Branch({ dataBranch }) {
    return (
        <section className='md:pt-[7rem] pt-[7.47rem] md:px-[4.17rem] px-[4.27rem]'>
            <div className='flex max-md:flex-col'>
                <h2 className='heading2 md:!tracking-[-0.17188rem] md:mr-[6rem] font-bold md:w-[24.4375rem]' dangerouslySetInnerHTML={{ __html: `${dataBranch?.heading}` }} ></h2>
                <div className=' max-md:mt-[12rem] max-md:mb-[12rem]'>
                    <div className='grid md:grid-cols-2 gap-x-[4.9rem] gap-y-[12rem] md:gap-y-[2.08rem] md:mb-[4rem]'>
                        {dataBranch?.listContentAddress?.map((item, index) => (
                            <div className='flex flex-col' key={index}>
                                <div className={`relative md:mb-[2.5rem] mb-[4rem] md:w-[5.26089rem] w-[18.13493rem] h-[18.13493rem] md:h-[5.62552rem] max-md:mr-[6.4rem] `}>
                                    <Image src={svg} alt='vector' width={200} height={200} className='md:w-[5.26089rem] md:h-[5.62552rem] w-[18.13493rem] h-[18.13493rem]' />
                                    <Image src={item?.icon?.sourceUrl} width={200} height={200} alt='icon' quality={100} className='md:w-[3.74297rem] w-[12.90267rem] h-[12.41573rem] md:h-[3.85135rem] object-contain absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <div className='text-[#444] md:w-[27rem] lg:text-[1.35417rem] leading-[1.2] md:text-[1.5rem] text-[4rem] md:tracking-[-0.02708rem] tracking-[-0.2rem]'>
                                    <p className='font-bold'>{item?.title}</p>
                                    <p className='max-md:mb-[4rem]'>{item?.subTitle}</p>
                                    <p dangerouslySetInnerHTML={{ __html: `${item?.infomation}` }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Image src={dataBranch?.image?.sourceUrl} alt={dataBranch?.image?.altText || 'image'} quality={100} width={1600} height={1000} className='object-cover max-md:hidden md:h-[31.875rem] w-full' />
                </div>
            </div>

            <div className='md:px-[4.17rem] h-[1px] bg-[#000] md:my-[5.94rem]'></div>
        </section>
    )
}

export default Branch