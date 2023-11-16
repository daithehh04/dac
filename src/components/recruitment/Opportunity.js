import React from 'react'
import OpportunityItem1 from '../common/OppoturnityItem1'
function Opportunity({ dataOp,dataPagination,lang }) {
    
    return (
        <section className='md:pt-[5.1rem] pt-[6rem] px-[4.27rem]  md:px-[4.17rem]'>
            <h2 className='heading md:mb-[5.1rem] max-md:!text-[6.93333rem]'>{dataOp?.subTitle}</h2>
            <div className='max-md:flex flex-col-reverse'>
                <div className='md:grid grid-cols-4 gap-x-[2.6rem]'>
                    {dataPagination?.nodes?.map((item, index) => (
                            <OpportunityItem1 lang={lang} key={index} data={item} />
                    ))}
                </div>
            </div>
            <p className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>

        </section>
    )
}

export default Opportunity