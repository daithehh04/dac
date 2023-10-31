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
    <div className='product h-[56.25rem] flex mt-[4.11rem]'>
      <div className='w-[24rem] bg-[#444] flex flex-col justify-between text-white pt-[7rem] pb-[2.88rem] pl-[4.11rem]'>
        <h3 className='title text-[3.4375rem] font-bold pr-[1.5rem]'>Sản phẩm dịch vụ</h3>
        <p className='desc pr-[5rem] text-[1.35417rem]'>Với tiêu chí <b>“CHẤT LƯỢNG - SỐ LƯỢNG - TIẾN ĐỘ - GIÁ CẢ”</b> Chúng tôi tin tưởng vào khả năng đáp ứng yêu cầu của Quý khách hàng.</p>
      </div>
      <div className='w-[74.5rem] h-full'><SlideProduct/></div>
    </div>
  )
}

export default Product
