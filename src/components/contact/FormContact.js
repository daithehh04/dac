'use client'

import React, { useState } from 'react'
import layer_11 from '@/assets/imgs/Layer_11.svg'
import layer_12 from '@/assets/imgs/Layer_12.svg'
import layer_13 from '@/assets/imgs/Layer_13.svg'
import Image from 'next/image'
import Button from '../common/Button'
import img from '@/assets/imgs/ContactImageInfo.png'

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
        <section className='contactForm md:pt-[4.7rem] pt-[5.07rem]  max-md:flex-col md:pl-[4.17rem] md:pr-[9.43rem]  md:pb-[6.56rem] flex justify-between'>
            {/* content-left */}
            <div className='max-md:px-[4.27rem]'>
                <h2 className='heading2 md:w-[23.4375rem] md:mb-[2.8rem] mb-[5.07rem]'>{dataForm?.title}</h2>
                {dataForm?.infoBranch?.map((item, index) => (
                    <div onClick={() => setActive(index)} key={index} className='flex items-center md:mb-[1.61rem] mb-[5rem] cursor-pointer'>
                        <div className={`md:w-[1.04167rem] md:h-[1.04167rem] w-[2.66667rem]  h-[2.66667rem] rounded-[50%] mr-[6.13rem] md:mr-[2.76rem] ${index === active ? 'bg-[#00A84F]' : 'bg-[#D9D9D9]'} `}></div>
                        <p className='description !font-normal'>{item?.name}</p>
                    </div>
                ))}
            </div>

            {/* content-right */}

            <div className='md:pt-[4.7rem] pt-[5rem] max-md:mb-[10rem] max-md:px-[4.27rem]'>
                <h3 className='description !font-normal md:mb-[3rem] max-md:!text-[3.2rem] md:w-[39.21875rem]'>{dataForm?.title2}</h3>
                <div className='flex flex-col max-md:my-[10rem]'>
                    {dataForm?.infoInput?.map((item, index) => (
                        <div key={index} className='max-md:border-b border-solid border-[#888] max-md:pb-[4rem]' >
                            <div className='flex justify-between items-center md:h-[3.22917rem]'>
                                <input placeholder={item?.label} className='bg-transparent max-md:text-[4.27rem] md:h-full w-[91rem] md:w-[28.75rem] h-[11rem] outline-none' />
                                {item?.icon && <Image src={item?.icon} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.8rem] h-[4.26667rem] object-contain' />}
                            </div>
                            <div className={`md:w-[39.21875rem] md:h-[1px] bg-[#000] ${index === dataForm?.infoInput?.length - 1 ? 'md:mt-[5.1rem] md:mb-[2.24rem]' : 'md:my-[1rem]'}`}></div>
                        </div>
                    ))}
                </div>
                <Button text={'Gửi thông tin'} />
            </div>
            <Image src={img} alt='image' quality={100} width={1000} height={1000} className='object-cover md:hidden h-[52.8rem] md:h-[31.875rem] w-full' />
        </section>
    )
}

export default FormContact