'use client'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
function HistoryMobile({ data }) {
    const openRef = useRef()
    const popUpRef = useRef()
    const seeMoreRef = useRef()
    const [selected, setSelected] = useState(0)
    const [number,setNumber] = useState(3)
    const handleClosePopUp = () => {
        if (popUpRef.current && openRef.current) {
            popUpRef.current.style.transform = 'translateX(-100%)'
            openRef.current.style.display = 'block'
        }
    }
    const handleOpenPopUp = () => {
        if (popUpRef.current && openRef.current) {
            popUpRef.current.style.transform = 'translateX(0%)'
            openRef.current.style.display = 'none'
        }
    }
    
    const handleClick = () =>{
        if(number >= data?.journey?.length){
            if(seeMoreRef.current){
                seeMoreRef.current.style.display ='none'
            }
        }
        setNumber(number + 3)
    }
    const handleSelect = (index) => {
        setSelected(index)
    }
    useEffect(()=>{
        const listElements = document.querySelectorAll('.historyYear')
        if(selected > 2){
            setNumber(selected + 1)
            listElements[number].scrollIntoView()
        }
        listElements[selected].scrollIntoView()
    },[selected])
    
    return (
        <section id='historyMobile' className='md:hidden overflow-x-hidden pr-[4.27rem] relative mb-[15rem]'>
            <div ref={popUpRef} className='popUpRef relative z-[11]'>
                <div className='absolute z-[1] shadow-lg rounded-br-[12.53333rem] w-[22.1rem] bg-[#fff] py-[6.67rem] pl-[2.13rem] pr-[4.8rem]'>
                    {data?.journey?.map((item, index) => (
                        <div onClick={() => handleSelect(index)} key={index} className='mb-[2.2rem]  border-l-[1px] border-[#444444] border-dashed  flex items-center justify-center cursor-grab'>
                            <span className={`text-[3.73333rem] text-black year-history `}>{item?.year}</span>
                            <div className={`absolute left-[0.75rem] w-[2.66667rem] rounded-[50%] border border-solid border-[#000] h-[2.66667rem] ${selected === index ? 'bg-[#00A84F]' : 'bg-[#fff]'}`}></div>
                        </div>
                    ))}
                </div>
                <svg onClick={handleClosePopUp} xmlns="http://www.w3.org/2000/svg" className='absolute left-[22.1rem] w-[6.93333rem] h-[10.93333rem]' viewBox="0 0 26 41" fill="none">
                    <path d="M0 0H26V29C26 35.6274 20.6274 41 14 41H0V0Z" fill="#00A84F" />
                    <path d="M15.5 26L10 20.5L15.5 15" stroke="white" />
                </svg>

            </div>
            <svg ref={openRef} onClick={handleOpenPopUp} xmlns="http://www.w3.org/2000/svg" className='absolute z-[10] left-0' width="26" height="35" viewBox="0 0 26 35" fill="none">
                <path d="M0 0.413818H26V22.3713C26 28.9987 20.6274 34.3713 14 34.3713H0V0.413818Z" fill="#00A84F" />
                <path d="M10 12.8372L15.5 17.3924L10 21.9477" stroke="white" />
            </svg>

            {/* main content */}
            <div className='pl-[13rem]'>
                {data?.journey?.slice(0,number)?.map((item,index)=>{
                    return (
                        <div key={index} className={`border-l-[1px] border-[#444444] border-dashed pl-[15rem] flex-col cursor-grab relative historyYear`}>
                            <span className='text-[#444] relative top-[-2rem] font-bold text-[6.93333rem] block year'>{item?.year}</span>
                            <Image
                                src={item?.img?.sourceUrl}
                                width={1000}
                                height={1000}
                                alt={item?.img?.altText || "history"}
                                className='object-cover  h-[48.26667rem]'
                            />
                            <p className='mt-[5.33rem] text-[4.26667rem] mb-[5rem] lg:text-[1.35417rem] line-clamp-2 min-h-[4.5rem]'>{item?.text}</p>
                            <div className={`absolute left-[-1.5rem] w-[2.66667rem] top-[2rem] rounded-[50%] border border-solid border-[#000] h-[2.66667rem] ${selected === index ? 'bg-[#00A84F]' : 'bg-[#fff]'}`}></div>
                        </div>
                    )
                })}
            </div>
            <span ref={seeMoreRef} onClick={handleClick} className='text-[#00A84F] next-slide-custom text-justify text-[3.2rem] leading-[1.2] tracking-[-0.096rem] relative left-[5rem]'>Xem thêm</span>
        </section>
    )
}

export default HistoryMobile
