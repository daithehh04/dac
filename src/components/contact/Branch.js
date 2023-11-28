import React from 'react'
import svg from '@/assets/imgs/GroupContact.svg'
import Image from 'next/image'
import Link from 'next/link'
function Branch({ dataBranch,lang }) {
    return (
        <section className='md:pt-[7rem] pt-[7.47rem] md:px-[4.17rem] px-[4.27rem]'>
            <div className='flex max-md:flex-col'>
                <h2 className='heading2 md:!tracking-[-0.17188rem] md:mr-[6rem] font-bold md:w-[24.4375rem]' dangerouslySetInnerHTML={{ __html: `${dataBranch?.heading}` }} ></h2>
                <div className='max-md:mt-[12rem] max-md:mb-[12rem]'>
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
                                    <p className='max-md:mb-[2rem]' dangerouslySetInnerHTML={{ __html: `${item?.infomation}` }}></p>
                                    <Link 
                                    href={
                                        index === 0 ? 'https://www.google.com/maps/place/72+%C4%90.+Tr%C6%B0%E1%BB%9Dng+Chinh,+Ph%C6%B0%C6%A1ng+%C4%90%C3%ACnh,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9985393,105.8366209,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac7aa15ba9a9:0xaf70e9b65eb129cc!8m2!3d20.9985343!4d105.8391958!16s%2Fg%2F11c5lvk2hy?entry=ttu'
                                        : index === 1 ? 'https://www.google.com/maps/place/Khu+c%C3%B4ng+nghi%E1%BB%87p+Ph%E1%BB%91+N%E1%BB%91i+A/@20.9478703,106.0189014,17z/data=!4m6!3m5!1s0x3135a57e89c29f31:0xec575b404696044b!8m2!3d20.9478653!4d106.0214763!16s%2Fg%2F11sz5bdqqt?entry=ttu'
                                        : 'https://www.google.com/maps/place/72+%C4%90.+Tr%C6%B0%E1%BB%9Dng+Chinh,+Ph%C6%B0%C6%A1ng+%C4%90%C3%ACnh,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9985393,105.8366209,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ac7aa15ba9a9:0xaf70e9b65eb129cc!8m2!3d20.9985343!4d105.8391958!16s%2Fg%2F11c5lvk2hy?entry=ttu'
                                    } 
                                    target='_blank'
                                    className='text-[#888] info_address md:text-[1.04167rem] text-[3.46667rem]  tracking-[-0.12133rem] leading-[1.2] md:tracking-[-0.03646rem] underline'>{lang === 'vi' ? 'Xem bản đồ' :'View the map'}</Link>
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