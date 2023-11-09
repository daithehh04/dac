'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useRef, useState } from 'react'
import product1 from '@/assets/imgs/product-1.jpg'
import product2 from '@/assets/imgs/product-2.jpg'
import product3 from '@/assets/imgs/product-3.jpg'
import Image from 'next/image'
import Link from 'next/link'
function SlideProduct({ lang }) {
  const data = [
    {
      img: product1,
      title: 'Bao bì <br/> Thuốc lá'
    },
    {
      img: product2,
      title: 'Bao bì <br/> thực phẩm'
    },
    {
      img: product3,
      title: 'Bao bì <br/> dược mỹ phẩm'
    },
    {
      img: product1,
      title: 'Bao bì <br/> Thuốc lá'
    },
    {
      img: product2,
      title: 'Bao bì <br/> thực phẩm'
    },
    {
      img: product3,
      title: 'Bao bì <br/> dược mỹ phẩm'
    }
  ]
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
        spaceBetween={0}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className='relative w-full h-full '
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className='block w-full h-full'
            >
              {({ isActive }) => (
                <Link href={`#!`} className='relative w-full h-full'>
                  <Image src={item.img} width={'100%'} height={'100%'} alt='img-product' className='w-full md:h-full h-[100rem] object-cover' />
                  <h3 className='absolute bottom-[5.56rem] pl-[3.17rem] text-[6.93333rem] max-md:whitespace-nowrap md:text-[2.5rem] font-bold text-white leading-[1.16]' dangerouslySetInnerHTML={{ __html: `${item.title}` }} ></h3>
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
