import React from 'react'
import Image from 'next/image'
import ServiceItem from './ServiceItem'

function Branch({data}) {
    return (
        <section>
            {/* nâng tầm thương hiệu */}
            <div className="md:px-[12.03rem] flex md:pt-[5.89rem] pt-[9.33rem] md:pb-[7.97rem] justify-between max-md:flex-col px-[4.27rem]">
                <h2 
                    dangerouslySetInnerHTML={{ __html: `${data?.enhanceBrand?.title}` }}
                    className='heading md:w-[38.1875rem] md:h-[16.4375rem] titleEnhance'>
                </h2>

                <p className='text-[#444] max-md:mt-[4rem] max-md:mb-[12rem] md:w-[28.8rem]  text-justify  text-ellipsis  md:text-[1.35417rem] text-[4.26667rem] md:leading-[1.2] md:tracking-[-0.0325rem]'>
                    {data?.enhanceBrand?.description}
                </p>
            </div>

            {/* Thiết kế bao bì */}
            <div className='lg:h-[100vh] md:h-[50vh] flex max-md:flex-col'>
                <div className='md:pl-[11.67rem] max-md:px-[4.27rem] md:pt-[4.84rem] pt-[5.33rem] md:pb-[10.1rem] pb-[9.6rem] md:pr-[5.73rem] bg-[#000D10] flex flex-col flex-1 md:w-[50%]'>
                    <h2 
                        dangerouslySetInnerHTML={{ __html: `${data?.packagingDesign?.title}` }}
                        className='heading package_desgin_title !text-[#fff] md:mb-[3.4375rem] mb-[8rem]'>
                    </h2>
                    <div className='flex flex-col md:w-[34.5625rem] md:h-[37.0625rem] md:pr-[4.9rem] text-justify md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] md:leading-[1.2] md:tracking-[-0.0325rem] text-[#fff]'>
                        <p className='design_content_list' dangerouslySetInnerHTML={{ __html: `${data?.packagingDesign?.description}` }}></p>
                    </div>
                </div>
                <div className='md:w-[50%]'>
                    <Image src={data?.packagingDesign?.image?.sourceUrl} alt={data?.packagingDesign?.image?.altText || 'img'} width={1000} height={1000} priority quality={100} className='md:w-full object-cover md:h-full h-[100rem]' />
                </div>
            </div>
            {/* Thiết kế nhận diện thương hiệu */}
            <div className='lg:h-[100vh] md:h-[50vh] flex max-md:flex-col-reverse '>
                <div className='md:w-[50%]'>
                    <Image src={data?.brandIdentity?.image?.sourceUrl} alt={data?.brandIdentity?.image?.altText || 'img' }  width={1000} height={1000} priority quality={100} className='md:w-full object-cover h-full' />
                </div>
                <div className='md:pl-[7.86rem] md:pt-[4.84rem] pt-[8rem] max-md:px-[4.27rem] md:w-[50%] md:pb-[10.1rem] md:pr-[5.73rem] bg-[#F0F0F0] flex flex-col '>
                    <h2 
                        dangerouslySetInnerHTML={{ __html: `${data?.brandIdentity?.title}` }}
                        className='heading design_identity_title md:mb-[2.4375rem]'>
                    </h2>
                    <div className='flex flex-col md:w-[28.8rem] md:h-[37.0625rem] text-justify md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] md:leading-[1.2] md:tracking-[-0.02708rem] text-[#444] max-md:pb-[12rem]'>
                        <p 
                            dangerouslySetInnerHTML={{ __html: `${data?.brandIdentity?.description}` }}
                            className='design_content_list max-md:py-[6rem]'>
                        </p>
                    </div>
                </div>
            </div>

            {/* Thiết Kế & Dịch vụ tư vấn */}

            <div className=' md:px-[4.2rem] px-[4.27rem] md:pt-[8.39rem] pt-[10rem] md:pb-[4.06rem] pb-[12rem] justify-between flex max-md:flex-col'>
                <div className='md:mr-[10.47rem]'>
                    <p 
                        dangerouslySetInnerHTML={{ __html: `${data?.consultingServices?.title}` }}
                        className='design_service_title heading md:w-[28.75rem]'>
                    </p>
                </div>
                <div className='grid md:grid-cols-2 max-md:gap-[6rem] gap-[5rem] max-md:mt-[7rem]'>
                    {data?.consultingServices?.listServices?.map((item, index) => (
                        <ServiceItem key={index} icon={item?.icon?.sourceUrl} textEdit={item?.name} text={item?.text} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Branch
