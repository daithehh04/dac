'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import partners1 from '@/assets/imgs/partner1.svg'
import partners2 from '@/assets/imgs/partner2.svg'
import partners3 from '@/assets/imgs/partner3.svg'
import partners4 from '@/assets/imgs/partner4.svg'
import Image from 'next/image'

function SlidePartners() {
  let slidePartners = [
    {
      sourceUrl: partners1
    },
    {
      sourceUrl: partners2
    },
    {
      sourceUrl: partners3
    },
    {
      sourceUrl: partners4
    },
  ]
  const dataSlide = slidePartners?.concat(slidePartners)?.concat(slidePartners)
  return (
    <div className='mt-[6.93rem] slide-partners'>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        allowTouchMove={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        speed={1000}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className='w-full mySwiper slide-partners'
      >
        {dataSlide?.map((item, index) => {
          return (
              <SwiperSlide className='w-[20%] partner-item' key={index*Math.random()}>
                <Image 
                  src={item?.sourceUrl}
                  width={500}
                  height={500}
                  alt='partners'
                  className={`object-contain w-[10.19rem] h-[9.6rem]`}
                />
              </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SlidePartners
