'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import logo from '@/assets/imgs/logo-w.svg'

function Footer() {
  const [active, setActive] = useState(false)
  const contentRef = useRef()
  const scrollRef = useRef()
  const handleClick = () => {
    setActive(!active)
    if (contentRef.current && active) {
      contentRef.current.style.height = contentRef.current.scrollHeight + "px"
      contentRef.current.style.overflow = 'visible'
      scrollRef.current.style.rotate = '180deg'
    } else if (contentRef.current && !active) {
      contentRef.current.style.height = '0'
      contentRef.current.style.overflow = 'hidden'
      scrollRef.current.style.rotate = '0deg'
    }
  }

  return (
    <footer className='footer bg-[#000D10] text-[#888] md:pt-[4.98rem] pt-[11.47rem] max-md:h-auto'>
      <div className="content max-md:flex flex-col justify-center ">
        <div className="logo">
          <Image src={logo} width={100} height={100} className='object-cover max-md:w-[20.53333rem] max-md:h-[11.73333rem]' alt='DAC' />
        </div>
        <div className='flex items-start max-md:flex-col justify-between md:mt-[4.58rem] mt-[6.4rem] description2 md:!tracking-[-0.05rem] !text-[#888]'>
          <div className="left md:w-[44rem] md:mr-[10.4rem] max-md:mb-[8rem]">
            <h3>CÔNG TY CỔ PHẨN BAO BÌ VÀ IN NÔNG NGHIỆP</h3>
            <p> Trụ sở: Tầng 6 tòa nhà APP – Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội <br /> Tel: (84.24) 36895605 – Fax: (84.24) 36895605 <br /> Nhà máy: Lô 3 – CN3 Khu CN Ngọc Hồi -Thanh Trì – Hà Nội <br /> Tel: (84.24) 36840092/3/4 – Fax: (84.24) 36840095 <br /> Email: info@ appmail.vn <br /> Web: www.appprintco.com</p>
          </div>
          <div ref={contentRef} className="right">
            <h3>CÔNG TY TNHH CÔNG NGHỆ CHỐNG GIẢ DAC</h3>
            <p> Trụ sở: Tầng 6 tòa nhà APP – Số 72 Trường Chinh – Phương Mai – Đống Đa – Hà Nội <br /> Tel: (84.24) 36895605 – Fax: (84.24) 36895605 <br /> Nhà máy: Lô 3 – CN3 Khu CN Ngọc Hồi -Thanh Trì – Hà Nội <br /> Tel: (84.24) 36840092/3/4 – Fax: (84.24) 36840095 <br /> Email: info@ appmail.vn <br /> Web: www.appprintco.com</p>
            <h3>CHI NHÁNH CÔNG TY CỔ PHẦN BAO BÌ VÀ IN NÔNG NGHIỆP TẠI HƯNG YÊN</h3>
            <p> Địa chỉ: Đường C1 – Khu CN Phố Nối A – Xã Lạc Hồng – Huyện Văn Lâm – Hưng Yên <br /> Tel: (0221) 3982136/7 – Fax: (0221) 3982135 <br /> Email: Info@appmail.vn</p>
          </div>
        </div>

        {/* see more > */}
        <svg ref={scrollRef} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className='relative left-[50%] md:hidden w-[4.33333rem] h-[3.46667rem] mb-[6.4rem]' viewBox="0 0 15 7" fill="none">
          <path d="M14 1L7.5 6L1 1" stroke="#888888" />
        </svg>
        {/*  */}
        <div className="h-[0.0625vw] w-full bg-[#fff] opacity-60 mt-[1.35417rem]"></div>
        <div className="flex items-center max-md:flex-col justify-between copy-right md:py-[3.25rem] py-[4rem] max-md:text-[3.73333rem] md:leading-[0.01867rem]">
          <p>Copyright © 2023 AppPrint Co. All rights reserved</p>
          <div className='flex items-center gap-[2rem]'>
            <span>Cookie policy</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer