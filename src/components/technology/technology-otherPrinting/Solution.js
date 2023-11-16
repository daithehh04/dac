import Image from 'next/image'
import React from 'react'
import organizationChart from '@/assets/imgs/organizationChart.png'
import chatMb from '@/assets/imgs/chartMb.png'
function Solution({ dataSolution }) {
    return (
        <section className='md:pt-[3.07rem] md:pb-[5.73rem] pt-[6.4rem] max-md:px-[4.27rem]'>
            <h2 className='heading md:text-center max-md:!text-[6.93333rem] md:mb-[1.87rem] mb-[5rem] md:pl-[10.43rem] md:pr-[12.03rem] md:h-[12.03125rem]'>
                {dataSolution?.title}
            </h2>
            <div className='md:pl-[5.78rem] md:pr-[11.67rem] relative'>
                <Image src={organizationChart} alt='image' quality={100} width={1000} height={1000} className='md:w-[73.75rem] max-md:hidden object-cover md:h-[34.89583rem] md:absolute left-0 z-[-1]' />
                <Image src={chatMb} alt='image' quality={100} width={1000} height={1000} className="md:hidden object-cover" />
                <div className='flex flex-col items-end md:pt-[1.5rem]'>
                    {dataSolution?.listSolution?.map((item, index) => (
                        <div
                            key={index}
                            className='list_solutions md:text-[1.5rem] lg:text-[1.35417rem] text-[4.27rem] md:tracking-[-0.04063rem] text-[#444] leading-[1.2] w-full md:w-[39.03125rem] md:mb-[2.19rem] max-md:mb-[6rem]'
                            dangerouslySetInnerHTML={{ __html: `${item?.solution}` }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solution