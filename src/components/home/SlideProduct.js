'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Pagination } from 'swiper/modules'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function SlideProduct({ lang, dataProductList }) {
  const [indexSlider, setIndexSlider] = useState(0)
  const swiperRef = useRef()
  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.activeIndex)
  }

  return (
    <div className='relative w-full h-full slide-product'>
      <Swiper
        slidesPerView={1}
        breakpoints={
          {
            768: {
              slidesPerView: 3
            }
          }
        }
        speed={800}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Autoplay,Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='relative w-full h-full '
      >
        {dataProductList?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className='block w-full h-full'
            >
              {({ isActive }) => (
                <Link href={`/${lang}/service-products/${item?.product_category?.info?.featureProduct}`} className='relative w-full h-full '>
                  <div className="overlay absolute top-0 w-full md:h-[100%] rotate-180 h-[100rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
                  <Image src={item?.product_category?.info?.image?.sourceUrl} quality={100} width={1000} height={1000} alt={item?.product_category?.info?.image?.altText || 'img-product'} className='w-full md:h-full h-[100rem] object-cover' />
                  <h3 className='absolute md:bottom-[4.64rem] text_product_item_home bottom-[10rem] md:pr-[2.9rem] left-0 w-full pl-[2.64rem] max-md:px-[4.27rem] text-[6.93333rem]  md:text-[2.5rem] font-bold text-white leading-[1.16]' dangerouslySetInnerHTML={{ __html: `${item.product_category?.info?.title}` }} ></h3>
                </Link>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex absolute top-[50%] -translate-y-2/4 z-10 w-full justify-between  btn-product'>
        <button
          onClick={handlePrevSlide}
          className='md:w-[1.6875rem] md:h-[3.375rem] w-[3.73333rem] h-[7.46667rem] absolute left-[2rem] top-[50%] -translate-y-2/4'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[1.6875rem] md:h-[3.375rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 32 58" fill="none">
            <path d="M30 56L3 29L30 2" stroke="white" strokeWidth="3" />
          </svg>
        </button>
        <button
          onClick={handleNextSlide}
          className='md:w-[1.6875rem] md:h-[3.375rem] w-[3.73333rem] h-[7.46667rem] absolute right-[2rem]  top-[50%] -translate-y-2/4'
        >
          <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[1.6875rem] md:h-[3.375rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 32 58" fill="none">
            <path d="M2 2L29 29L2 56" stroke="white" strokeWidth="3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SlideProduct
