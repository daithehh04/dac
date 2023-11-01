'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Pagination, Navigation } from 'swiper/modules';
import prd1 from '@/assets/imgs/prd1.png'
import prd2 from '@/assets/imgs/prd2.png'
import prd3 from '@/assets/imgs/prd3.png'
import prd5 from '@/assets/imgs/prd5.png'
import prd4 from '@/assets/imgs/itemFeature.png'
function ServiceDetail() {
    const data = {
        listImageFeature: [
            {
                image: prd4
            },
            {
                image: prd4
            },
            {
                image: prd4
            }

        ],
        info: [
            {
                name: 'Chất liệu:',
                infoName: 'Ivory 220 Gsm'
            },
            {
                name: 'Kiểu dáng:',
                infoName: 'Compact'
            },
            {
                name: 'Hiệu ứng:',
                infoName: 'Bóng gốc nước, bóng sần cục bộ, bế nổi'
            },
            {
                name: 'Công nghệ in:',
                infoName: 'Offset/Flexo'
            }

        ],
        otherBranch: [
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd1
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd5
                    },
                ]
            },
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd2
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd3
                    },
                ]
            },
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd5
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd3
                    },
                ]
            },
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd2
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd1
                    },
                ]
            },
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd1
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd2
                    },
                ]
            },
            {
                image: prd4,
                attachImage: [
                    {
                        imageAttach: prd3
                    },
                    {
                        imageAttach: prd4
                    },
                    {
                        imageAttach: prd1
                    },
                ]
            },
        ]
    }

    const [indexSlide, setIndexSlide] = useState(0)
    const swiperRef = useRef()
    const handleSlideChange = (swiper) => {
        setIndexSlide(swiper.realIndex);
    };
    const handlePreSlide = () => {
        swiperRef?.current?.slidePrev();
    };
    const handleNextSlide = () => {
        swiperRef?.current?.slideNext();
    };
    return (
        <section className="md:pt-[10.26rem]">
            <div className='md:px-[4.27rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1759" height="2" viewBox="0 0 1759 2" fill="none">
                    <path d="M1 1H1758" stroke="black" stroke-linecap="round" />
                </svg>
            </div>

            <div className="md:pt-[3.18rem] md:px-[12.03rem] flex flex-col md:pb-[3.96rem]">
                <h2 className='heading'>
                    Bao bì thuốc lá
                </h2>

                <div className='flex justify-between md:mt-[2.5rem] md:mb-[4.01rem]'>
                    {/* slide1 */}
                    <div className='relative md:w-[36.66667rem] md:h-[32.8125rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute inset-0' viewBox="0 0 704 630" fill="none">
                            <path d="M0 0H704V464.211C704 555.774 643.174 630 568.14 630H0V0Z" fill="#D9D9D9" />
                        </svg>
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper md:w-[36.66667rem] md:h-full">
                            {data?.otherBranch[indexSlide]?.attachImage?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={item?.imageAttach} alt='img' quality={100} className='w-full h-full object-cover md:rounded-br-[7.5rem]' />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                    {/* info */}
                    <div className=''>
                        <h2 className='heading md:mb-[1.3rem] md:w-[28.59rem]'>Bao thuốc lá thăng long</h2>
                        <div className='flex flex-col md:w-[32rem] md:h-[21.82rem]'>
                            {data?.info?.map((item, index) => (
                                <div key={index} className='flex text-[#444] items-center md:text-[1.35417rem] font-bold md:leading-[226.662%] md:tracking-[-0.06771rem]'>
                                    <span>{item?.name}</span>
                                    <span className='font-normal'>{item?.infoName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* slide2 */}
                <div className='flex flex-col relative'>
                    <h3 className='md:w-[28.81rem] md:h-[2.76042rem] md:mb-[0.68rem] text-[#444] md:text-[1.35417rem] md:leading-[116.662%] md:tracking-[-0.06771rem]'>Các mẫu thuốc lá khác</h3>
                    <div className='slideOther_Item relative'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            loop={true}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                            onBeforeInit={(swiper) => {
                                if (swiperRef) {
                                    swiperRef.current = swiper;
                                }
                            }}
                        >
                            {data?.otherBranch?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={item?.image} className='imageSlideOtherItem md:w-[12.96875rem] md:h-[11.92708rem] object-cover' />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* pre */}
                    <button
                        className='absolute left-[-2rem] top-[50%]'
                        onClick={handlePreSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M17 37L2 18.5L17 1" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                    {/* next */}

                    <button
                        className='absolute right-[-2rem] top-[50%]'
                        onClick={handleNextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M2 1L17 19.5L2 37" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetail
