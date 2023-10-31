'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useRef, useState } from 'react'
import Image from 'next/image'
import arrNext from '@/assets/imgs/arr-r.svg'
import arrPrev from '@/assets/imgs/arr-l.svg'
import imgVideo from '@/assets/imgs/img-video.jpg'
const data = new Array(6).fill()
function VideoSlide() {
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
    <div className='relative h-full content slide-product mt-[8.5rem]'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        speed={1000}
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
                 <div>
                  <Image src={imgVideo} width={'100%'} height={'100%'} alt='img' className='w-full h-[100vh]'/>
                  <p className='text-white text-[6.667rem] opacity-40 font-bold uppercase absolute top-[50%] -translate-y-1/2 w-full text-center'>Video app</p>
                 </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex absolute bottom-[3.75rem] z-10 w-full justify-between max-md:hidden btn-product'>
        <button
          onClick={handlePrevSlide}
          className='w-[2.78rem] h-[2.6rem] absolute right-[13rem] bottom-0'
        >
          <Image src={arrPrev} width={'100%'} height={'100%'} alt='icon'/>
        </button>
        <button
          onClick={handleNextSlide}
          className='w-[2.78rem] h-[2.6rem] absolute right-[10rem] bottom-0'
        >
           <Image src={arrNext} width={'100%'} height={'100%'} alt='icon'/>
        </button>
      </div>
      <span className='absolute bottom-[3.75rem] right-[2.26rem] text-[3.64583rem] text-white font-bold z-10 leading-[1]'>{indexSlider+1}/{data.length}</span>
    </div>
  )
}

export default VideoSlide
