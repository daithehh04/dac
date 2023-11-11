'use client'
import React, { useRef, useState } from 'react'
import jour from '@/assets/imgs/jour-img.jpg'
import circle from '@/assets/imgs/circle.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

function History({ data }) {
  const text = `
  Kể từ khi được cổ phần hóa, sau gần 30 năm hoạt động, Công ty đã đạt được những thành tựu đáng khích lệ và hiện là một trong những công ty hàng đầu trong ngành in ấn và bao bì tại Việt Nam.<br/>
  <br/>
  Với lợi thế về đội ngũ cán bộ, công nhân kỹ thuật tay nghề cao được đào tạo bài bản cùng hệ thống trang thiết bị hiện đại. Công ty luôn đáp ứng nhu cầu của khách hàng trong và ngoài nước theo những tiêu chuẩn khắt khe nhất về chất lượng sản phẩm. <br/>
  Sản phẩm chính của Chúng tôi là bao bì màng mỏng, màng nhôm dược, tem nhãn và đặc biệt là bao bì hộp giấy như hộp bánh kẹo, tân dược, thuốc lá, ...
  `

 console.log(data?.journey);
  const [selected, setSelected] = useState(0)
  const swiperRef = useRef()
  const handleSelect = (index) => {
    swiperRef.current.slideTo(index)
  }
  return (
    <section className='max-md:hidden'>
      <div className='relative mt-[2rem] content '>
        <div className='flex gap-[0.73rem] ml-[1.35rem] border-bottom border-dashed border-[#444] mt-[0.83rem]'>
          {data?.journey?.map((item, index) => (
            <div onClick={() => handleSelect(index)} key={index} className='flex items-center justify-center cursor-grab'>
              <span className='lg:text-[0.78125rem] md:text-[1.2rem] text-black year-history'>{item?.year}</span>
              <Image src={circle} width={'100%'} height={'100%'} alt='circle' className='absolute bottom-[-0.235rem] w-[0.54rem] h-[0.54rem] object-cover' />
            </div>
          ))}
        </div>
        {/* <Image src={line} width={'100%'} height={'100%'} alt='line' className='mt-[0.83rem] w-max'/> */}
        <div className='line-sm mt-[0.8rem]'></div>
      </div>
      {/* <SlideHistory /> */}

      <div className='mt-[6.93rem] content slide-history relative mb-[5.3rem]'>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 4
            }
          }}
          slidesPerView={2}
          spaceBetween={0}
          loop={false}
          centeredSlides={false}
          allowTouchMove={true}
          speed={1000}
          className='w-full'
          onBeforeInit={(swiper) => {
            if (swiperRef) {
              swiperRef.current = swiper;
            }
          }}
        >
          {data?.journey?.map((item, index) => {
            return (
              <SwiperSlide key={index * Math.random()}>
                <div className='mr-[2.76rem] flex justify-center flex-col item-history relative cursor-grab'>
                  <Image
                    src={item?.img?.sourceUrl}
                    width={1000}
                    height={1000}
                    alt={item?.img?.altText || history}
                    className='object-cover h-[15.1rem] image'
                  />
                  <p className='mt-[1.4rem] text-[1.41rem] lg:text-[1.35417rem] line-clamp-2 min-h-[4.5rem]'>{item?.text}</p>
                  <span className='text-[#444] font-bold text-[1.875rem] text-center block year'>{item?.year}</span>
                  <Image src={circle} width={'100%'} height={'100%'} alt='circle' className='absolute bottom-0 left-[50%] w-[0.9375rem] h-[0.9375rem] object-cover circle' />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className='line absolute top-[calc(50%)]'></div>
      </div>


      {/*  */}
      <div className='flex justify-between content border-t border-solid border-[#444] pb-[8.8rem]'>
        <p className='lg:text-[1.35417rem] md:text-[1.5rem] text-justify text-[#444] w-[44.375rem] pt-[3.96rem]' dangerouslySetInnerHTML={{ __html: `${text}` }}></p>
        <Image src={jour} width={'100%'} height={'100%'} className='w-[36.66rem] object-cover h-[50.625rem] rounded-br-[9.73rem]' alt='jour' />
      </div>
    </section>
  )
}

export default History