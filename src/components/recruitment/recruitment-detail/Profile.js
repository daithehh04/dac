'use client'
import OpportunityItem from '@/components/common/OpportunityItem'
import React from 'react'
import layer10 from '@/assets/imgs/Layer_10.svg'
import Link from 'next/link'

function Profile() {
    const data =
    {
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
                    }
                ]
            }
        ]

    }
    const handleClick = () => {
        if (refElement.current) {
            refElement.current.style.display = 'flex'
        }
    }
    const refElement = useRef()
    return (
        <section className='md:pt-[1.13rem] pt-[6.4rem] px-[4.27rem] md:px-[4.17rem] md:pb-[10rem]'>
            <h3 className='description md:mb-[2.24rem] mb-[6rem]'>Các vị trí khác</h3>
            <div className='md:grid grid-cols-4'>
                {data?.listOppo?.map((item, index) => (
                    <div key={index} ref={refElement} className={`max-md:mb-[12rem] opportunityItem_detail ${index === 0 || index === 1 ? '' : 'max-md:hidden'}`}>
                        <OpportunityItem icon={item?.icon} data={item?.infoOppo} />
                    </div>
                ))}
            </div>
            <p onClick={handleClick} className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>
        </section>
    )
}

export default Profile