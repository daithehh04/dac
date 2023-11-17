'use client'

import React, { useState } from 'react'
import layer_11 from '@/assets/imgs/Layer_11.svg'
import layer_12 from '@/assets/imgs/Layer_12.svg'
import layer_13 from '@/assets/imgs/Layer_13.svg'
import Image from 'next/image'
import Button from '../common/Button'
import img from '@/assets/imgs/ContactImageInfo.png'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

function FormContact({ dataForm }) {
    const [active, setActive] = useState(0)
    // const dataForm = {
    //     title: 'Kết nối ngay với App',
    //     title2: 'Chúng tôi luôn sẵn sàng lắng nghe và đưa ra những dịch vụ phù hợp nhất cho sản phẩm của bạn.',
    //     infoBranch: [
    //         {
    //             name: 'Trụ sở 72 trường chinh'
    //         },
    //         {
    //             name: 'Chi Nhánh nhà máy Hưng Yên'
    //         },
    //         {
    //             name: 'Chi Nhánh nhà máy Ngọc Hồi'
    //         }
    //     ],
    //     infoInput: [
    //         {
    //             label: 'Họ tên*',
    //             icon: layer_11
    //         },
    //         {
    //             label: 'Email*',
    //             icon: layer_12
    //         },
    //         {
    //             label: 'Số điện thoại*',
    //             icon: layer_13
    //         },
    //         {
    //             label: 'Nội dung*'
    //         }
    //     ]
    // }
    const INITAL_FORM_STATE = {
        fullName: '',
        email: '',
        telephone: '',
        message: '',
        address: ''
    }
    const FORM_VALIDATION = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email.').required('Required'),
        telephone: Yup.string()
            .matches(/^[0-9]+$/, 'Enter a valid number')
            .min(9, 'Must have 9 number')
            .required('Required'),
        message: Yup.string(),
        address: Yup.string()
    })
    return (
        <section className='contactForm md:pt-[4.7rem] pt-[5.07rem]  max-md:flex-col md:pl-[4.17rem] md:pr-[9.43rem]  md:pb-[6.56rem] flex justify-between'>
            {/* content-left */}
            <div className='max-md:px-[4.27rem]'>
                <h2 className='heading2 md:w-[23.4375rem] md:mb-[2.8rem] mb-[5.07rem]'>{dataForm?.heading}</h2>
                {dataForm?.address?.map((item, index) => (
                    <div onClick={() => setActive(index)} key={index} className='flex items-center md:mb-[1.61rem] mb-[5rem] cursor-pointer'>
                        <div className={`md:w-[1.04167rem] md:h-[1.04167rem] w-[2.66667rem]  h-[2.66667rem] rounded-[50%] mr-[6.13rem] md:mr-[2.76rem] ${index === active ? 'bg-[#00A84F]' : 'bg-[#D9D9D9]'} `}></div>
                        <p className='description !font-normal'>{item?.text}</p>
                    </div>
                ))}

            </div>

            {/* content-right */}

            <div className='max-md:mb-[10rem] max-md:px-[4.27rem]'>
                <h3 className='description !font-normal md:mb-[3rem] max-md:!text-[3.2rem] mb-[5rem] md:w-[39.21875rem]'>{dataForm?.formData?.title}</h3>
                <Formik
                    initialValues={{ ...INITAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    // onSubmit={(values, { resetForm }) => {
                    //     handleForm(values, resetForm)
                    // }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => {
                        return (
                            <Form>
                                <div className='flex flex-col bg-transparent formSubmit md:mb-[1rem]'>
                                    {/* họ tên */}
                                    <span className='md:text-[1.04167rem] max-md:mt-[2rem] text-[4.26667rem] leading-[116.662%] md:tracking-[-0.05208rem] tracking-[-0.21333rem]'>{dataForm?.formData?.name}</span>
                                    <div className='flex justify-between items-center border-b border-solid border-[#000]  md:mb-[1rem]  max-md:pb-[1.5rem] max-md:pt-[1rem] ' >
                                        <Field name="fullName" type='text' className='bg-transparent' />
                                        <Image src={layer_11} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.fullName && touched.fullName ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]' >{errors.fullName}</div>
                                    ) : null}

                                    {/* email */}
                                    <span className='md:text-[1.04167rem] max-md:mt-[2rem] text-[4.26667rem] leading-[116.662%] md:tracking-[-0.05208rem] tracking-[-0.21333rem]'>{dataForm?.formData?.email}</span>
                                    <div className='flex justify-between items-center border-b border-solid border-[#000] max-md:pb-[1.5rem]  md:mb-[1rem] max-md:pt-[1rem] ' >
                                        <Field name="email" type="email" className='bg-transparent' />
                                        <Image src={layer_12} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.email && touched.email ? <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.email}</div> : null}
                                    {/* telephone */}
                                    <span className='md:text-[1.04167rem] max-md:mt-[2rem] text-[4.26667rem] leading-[116.662%] md:tracking-[-0.05208rem] tracking-[-0.21333rem]'>{dataForm?.formData?.telephone}</span>
                                    <div className='flex justify-between items-center border-b border-solid border-[#000] max-md:pb-[1.5rem] md:mb-[1rem] max-md:pt-[1rem] ' >
                                        <Field name="telephone" type='text' className='bg-transparent' />
                                        <Image src={layer_13} alt='icon' quality={100} width={1000} height={1000} className='md:w-[1.35417rem] md:h-[1.25rem] w-[4.9536rem] h-[4.57253rem] object-contain' />
                                    </div>
                                    {errors.telephone && touched.telephone ? (
                                        <div className='md:mb-[1rem] text-[#ff0000] max-md:text-[2rem]'>{errors.telephone}</div>
                                    ) : null}
                                    {/* content */}
                                    <span className='md:text-[1.04167rem] max-md:mt-[2rem] text-[4.26667rem] leading-[140.662%] md:tracking-[-0.05208rem] tracking-[-0.21333rem]'>{dataForm?.formData?.content}</span>
                                    <div className='flex flex-col justify-between max-md:pt-[2rem] mb-[8rem] border-b border-solid  border-[#000] md:mb-[1rem]' >
                                        <TextareaAutosize
                                            className='outline-none md:w-[25rem]'
                                            minRows={4}
                                            name="message"
                                        />
                                    </div>
                                    <Field name="address" type='text' className='hidden' />
                                </div>
                                <Button text={dataForm?.formData?.button || 'Gửi thông tin'} />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
            <Image src={img} alt='image' quality={100} width={1000} height={1000} className='object-cover md:hidden h-[52.8rem] md:h-[31.875rem] w-full' />
        </section>
    )
}

export default FormContact