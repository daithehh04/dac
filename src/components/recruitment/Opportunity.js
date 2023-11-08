'use client'
import React from 'react'
import layer10 from '@/assets/imgs/Layer_10.svg'
import OpportunityItem from '../common/OpportunityItem'
import Link from 'next/link'
function Opportunity() {
    const data =
    {
        title: 'Cơ hội việc làm',
        listOppo: [
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Chuyên viên thiết kế đồ họa'
                    },
                    {
                        text: 'Địa điểm làm việc: Hà Nội'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    },
                    {
                        text: 'Ngày hết hạn: 30/10/2023'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Nhân viên Thị Trường'
                    },
                    {
                        text: 'Địa điểm làm việc: Hà Nội'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    },
                    {
                        text: 'Ngày hết hạn: 30/10/2023'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Kỹ thuật viên lập trình'
                    },
                    {
                        text: 'Địa điểm làm việc: Hưng Yên'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    },
                    {
                        text: 'Ngày hết hạn: 30/10/2023'
                    }
                ]
            },
            {
                icon: layer10,
                infoOppo: [
                    {
                        text: 'Kỹ thuật viên lập trình'
                    },
                    {
                        text: 'Địa điểm làm việc: Hưng Yên'
                    },
                    {
                        text: 'Mức lương: Thỏa thuận'
                    },
                    {
                        text: 'Ngày hết hạn: 30/10/2023'
                    }
                ]
            }
        ]

    }
    const handleClick = () => {
        const opportunityItem_hidden = document.querySelectorAll('.opportunityItem_hidden')
        opportunityItem_hidden.forEach(item => {
            item.style.display = 'flex'
        })
    }

    return (
        <section className='md:pt-[5.1rem] pt-[6rem] px-[4.27rem] md:pb-[8.56rem] md:px-[4.17rem]'>
            <h2 className='heading md:mb-[5.1rem] max-md:!text-[6.93333rem]'>{data?.title}</h2>
            <div className='max-md:flex flex-col-reverse'>
                <div className='md:grid grid-cols-4 gap-x-[2.6rem]'>
                    {data?.listOppo?.map((item, index) => (
                        <div key={index} className={`opportunityItem_hidden max-md:mb-[10rem] ${index === 0 || index === 1 || index === 2 ? '' : 'max-md:hidden'}`}>
                            <OpportunityItem icon={item?.icon} data={item?.infoOppo} classCus={'md:flex-row'} />
                        </div>
                    ))}
                </div>
                <div className='searchTextBlog flex justify-center md:mt-[5.8rem] md:mb-[1rem] max-md:my-[7rem]'>
                    <input placeholder='Tim Kiem' className=' md:w-[10.625rem] w-[42.46rem] h-[8.8rem] rounded-[11.46667rem] md:h-[2.1875rem] md:px-[0.5rem] md:rounded-[2.23958rem] bg-[#F0F0F0]' />
                </div>
            </div>
            <p onClick={handleClick} className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>

        </section>
    )
}

export default Opportunity