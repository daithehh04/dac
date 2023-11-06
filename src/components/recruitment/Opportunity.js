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


    return (
        <section className='md:pt-[5.1rem] md:pb-[8.56rem] md:px-[4.17rem]'>
            <h2 className='heading md:mb-[5.1rem]'>{data?.title}</h2>
            <div className='md:grid grid-cols-4 gap-x-[2.6rem]'>
                {data?.listOppo?.map((item, index) => (
                    <div key={index}>
                        <OpportunityItem icon={item?.icon} data={item?.infoOppo} />
                        <Link href={`/recruitment/a`}>
                            <p className='md:w-[21.04167rem] cursor-pointer description !text-[#888] underline !font-normal'>Ứng tuyển ngay</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='searchTextBlog flex justify-center md:mt-[5.8rem] md:mb-[1rem]'>
                <input placeholder='Tim Kiem' className=' md:w-[10.625rem] md:h-[2.1875rem] md:px-[0.5rem] md:rounded-[2.23958rem] bg-[#F0F0F0]' />
            </div>
        </section>
    )
}

export default Opportunity