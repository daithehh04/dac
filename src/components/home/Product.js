'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules'
import { useRef, useState } from 'react'
import product1 from '@/assets/imgs/product-1.jpg'
import product2 from '@/assets/imgs/product-2.jpg'
import product3 from '@/assets/imgs/product-3.jpg'
import Image from 'next/image'
import SlideProduct from './SlideProduct'
function Product({ lang }) {
  const data = [
    {
      img: product1,
      title: 'Bao bì Thuốc lá'
    },
    {
      img: product2,
      title: 'Bao bì thực phẩm'
    },
    {
      img: product3,
      title: 'Bao bì dược mỹ phẩm'
    },
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
    <div className='product md:h-[56.25rem] flex md:mt-[4.11rem] max-md:mt-[9rem] max-md:flex-col'>
      <div className='md:w-[24rem] max-md:px-[4.27rem] md:bg-[#444] flex flex-col justify-between md:text-white pb-[9rem] md:pt-[7rem] md:pb-[2.88rem] md:pl-[4.11rem]'>
        <h3 className='title text-[8.53333rem] md:text-[3.4375rem] font-bold md:pr-[1.5rem] max-md:text-[#444]'>Sản phẩm dịch vụ</h3>
        <p className='desc md:pr-[5rem] md:text-[1.35417rem] text-justify text-[4.26667rem] max-md:text-[#888]'>Với tiêu chí <b>“CHẤT LƯỢNG - SỐ LƯỢNG - TIẾN ĐỘ - GIÁ CẢ”</b> Chúng tôi tin tưởng vào khả năng đáp ứng yêu cầu của Quý khách hàng.</p>
      </div>
      <div className='md:w-[74.5rem] h-full'><SlideProduct /></div>
    </div>
  )
}

export default Product
