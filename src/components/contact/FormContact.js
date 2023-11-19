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
import { gql, useMutation } from '@apollo/client'
const SUBMIT_FORM = gql`
  mutation ($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      entry {
        id
      }
      errors {
        message
      }
    }
  }
`
function FormContact({ dataForm }) {
    const [active, setActive] = useState(0)
    const [mutate, { loading }] = useMutation(SUBMIT_FORM)
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

    const handleForm = (values, resetForm) => {
        mutate({
            variables: {
                input: {
                    id: 2,
                    fieldValues: [
                        { id: 1, value: values.fullName },
                        { id: 3, value: values.email },
                        { id: 5, value: values.telephone },
                        { id: 6, value: values.message },
                        { id: 7, value: values.address }
                    ]
                }
            }
        }).then((res) => {
            if (res?.data?.submitGfForm?.errors?.length > 0) {
                // Have Error
                return
            } else {
                // Successful
                resetForm()
            }
        })
    }
    return (
        <section className='contactForm md:pt-[4.7rem] pt-[5.07rem]  max-md:flex-col md:pl-[4.17rem] md:pr-[9.43rem]  md:pb-[6.56rem] flex justify-between'>
            {/* content-left */}
            {/* content-right */}

            <div className='max-md:mb-[10rem] max-md:px-[4.27rem] w-full'>

                <Formik
                    initialValues={{ ...INITAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        handleForm(values, resetForm)
                    }}
                >
                    {({ errors, touched,setFieldValue }) => {
                        return (
                            <Form>
                                <div className='flex justify-between max-md:flex-col'>

                                    <div className=''>
                                        <h2 className='heading2 md:w-[23.4375rem] md:mb-[2.8rem] mb-[5.07rem]'>{dataForm?.heading}</h2>
                                        {dataForm?.address?.map((item, index) => (

                                            <div key={index} className='flex items-center md:mb-[1.61rem] mb-[5rem]'>
                                                <Field
                                                    type='radio'
                                                    name='address'
                                                    value={item?.text}
                                                />
                                                <span className='description !font-normal ml-[2.5rem] md:ml-[1rem]'>
                                                    {item?.text}
                                                </span>
                                            </div>
                                        ))}

                                    </div>
                                    <div className='flex flex-col bg-transparent formSubmit md:mb-[1rem]'>
                                        <h3 className='description !font-normal md:mb-[3rem] max-md:!text-[3.2rem] mb-[5rem] md:w-[39.21875rem]'>{dataForm?.formData?.title}</h3>
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
                                                name='message'
                                                onChange={(e)=>setFieldValue("message",e.target.value)}
                                            />
                                        </div>
                                    </div>
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