'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import SelectLang from '../lang/SelectLang'
import SelectLangMb from '../lang/SelectLangMb'

function MenuMb({ data, handleCloseModal, lang }) {
    const [selected, setSelected] = useState(null)
    const [menuMbItem, setMbMenuItem] = useState(null)
    const refElement = useRef()
    useEffect(() => {
        const menu_mobile_item = document.querySelectorAll('.menu_mobile_item')
        setMbMenuItem(menu_mobile_item)
    }, [])
    const handleSelect = (num) => {
        if (num === selected) {
            setSelected(null)
        } else {
            setSelected(num)
        }
    }

    return (
        <section className='pt-[10.93rem] px-[4.27rem] pb-[8.53rem] relative'>
            <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" className='w-[10.4rem] h-[10.4rem] fixed top-[12.23rem] right-[4.27rem]' viewBox="0 0 39 39" fill="none">
                <g clip-path="url(#clip0_1129_2615)">
                    <path d="M19.5029 39.0057C30.274 39.0057 39.0057 30.274 39.0057 19.5029C39.0057 8.73172 30.274 0 19.5029 0C8.73172 0 0 8.73172 0 19.5029C0 30.274 8.73172 39.0057 19.5029 39.0057Z" fill="#444545" />
                    <path d="M15 15L24.8913 24.8913" stroke="white" stroke-miterlimit="10" />
                    <path d="M15 24.8914L24.8913 15" stroke="white" stroke-miterlimit="10" />
                </g>
                <defs>
                    <clipPath id="clip0_1129_2615">
                        <rect width="39" height="39" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <SelectLangMb lang={lang} handleCloseModal={handleCloseModal} />

            <div className='flex flex-col'>
                {data?.map((item, index) => {
                    return (
                        <div key={index} className='mb-[2.67rem]'>
                            {
                                item?.listContent ?
                                    (
                                        <span
                                            onClick={() => handleSelect(index)}
                                            className='text-[#444] text-[5.33333rem]  font-bold'
                                            key={index}>{item?.link}
                                        </span>
                                    )
                                    :
                                    (
                                        <Link
                                            onClick={handleCloseModal}
                                            className='text-[#444] mb-[2.67rem] text-[5.33333rem] font-bold'
                                            href={`/${lang}/${item?.slug}` || '/'}>{item?.link}
                                        </Link>
                                    )
                            }
                            {
                                item?.listContent && (
                                    <div
                                        ref={refElement}
                                        className='menu_mobile_item flex flex-col mt-[2rem]'
                                        style={
                                            selected === index
                                                ? {
                                                    height: menuMbItem[index - 1 < 0 ? 0 : index - 1].scrollHeight,
                                                    overflow: "visible",
                                                }
                                                : {
                                                    height: "0",
                                                    overflow: "hidden",
                                                }
                                        }
                                    >
                                        {item?.listContent?.map((mbItem, index) => (
                                            <Link
                                                onClick={handleCloseModal}
                                                href={`/${lang}/${item?.slug2}/${mbItem?.slug}` || '/'}
                                                key={index}
                                                className='text-[#444] text-[3.46667rem] leading-[116.662%] tracking-[-0.104rem] mb-[2.67rem]'>
                                                {mbItem?.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MenuMb
