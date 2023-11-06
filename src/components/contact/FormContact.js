'use client'

import React, { useState } from 'react'
import layer_11 from '@/assets/imgs/Layer_11.svg'
import layer_12 from '@/assets/imgs/Layer_12.svg'
import layer_13 from '@/assets/imgs/Layer_13.svg'
import Image from 'next/image'
import Button from '../common/Button'
function FormContact() {
    const [active, setActive] = useState(0)
    const dataForm = {
        title: 'Kết nối ngay với App',
        title2: 'Chúng tôi luôn sẵn sàng lắng nghe và đưa ra những dịch vụ phù hợp nhất cho sản phẩm của bạn.',
        infoBranch: [
            {
                name: 'Trụ sở 72 trường chinh'
            },
            {
                name: 'Chi Nhánh nhà máy Hưng Yên'
            },
            {
                name: 'Chi Nhánh nhà máy Ngọc Hồi'
            }
        ],
        infoInput: [
            {
                label: 'Họ tên*',
                icon: layer_11
            },
            {
                label: 'Email*',
                icon: layer_12
            },
            {
                label: 'Số điện thoại*',
                icon: layer_13
            },
            {
                label: 'Nội dung*'
            }
        ]
    }
    return (
        <section className='md:pt-[4.7rem] md:pl-[4.17rem] md:pr-[9.43rem] md:pb-[6.56rem] flex justify-between'>
            {/* content-left */}
            <div className=''>
                <h2 className='heading md:w-[23.4375rem] md:mb-[2.8rem]'>{dataForm?.title}</h2>
                {dataForm?.infoBranch?.map((item, index) => (
                    <div onClick={() => setActive(index)} key={index} className='flex items-center md:mb-[1.61rem] cursor-pointer'>
                        <div className={`md:w-[1.04167rem] md:h-[1.04167rem] rounded-[50%] md:mr-[2.76rem] ${index === active ? 'bg-[#00A84F]' : 'bg-[#D9D9D9]'} `}></div>
                        <p className='description !font-normal'>{item?.name}</p>
                    </div>
                ))}
            </div>

            {/* content-right */}

            <div className='md:pt-[4.7rem]'>
                <h3 className='description !font-normal md:mb-[3rem] md:w-[39.21875rem]'>{dataForm?.title2}</h3>
                <div className='flex flex-col'>
                    {dataForm?.infoInput?.map((item, index) => (
                        <div key={index} >
                            <div className='flex justify-between items-center md:h-[3.22917rem]'>
                                <input placeholder={item?.label} className='bg-transparent h-full md:w-[28.75rem] outline-none' />
                                {item?.icon && <Image src={item?.icon} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] object-contain' />}
                            </div>
                            <div className={`md:w-[39.21875rem] md:h-[1px] bg-[#000] ${index === dataForm?.infoInput?.length - 1 ? 'md:mt-[5.1rem] md:mb-[2.24rem]' : 'md:my-[1rem]'}`}></div>
                        </div>
                    ))}
                </div>
                <Button text={'Gửi thông tin'} />
            </div>
        </section>
    )
}

export default FormContact