import React from 'react'
import titleImg from '@/assets/imgs/title-sec2.svg'
import box from '@/assets/imgs/Boxes-detail.jpg'
import Image from 'next/image'
const data = [
  {
    title: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
    desc: 'Tầm nhìn trở thành doanh nghiệp hàng đầu trong lĩnh vực sản xuất bao bì tại Việt Nam. Doanh nghiệp làm việc lấy khách hàng là trung tâm và lấy thị trường là định hướng phát triển.'
  },
  {
    title: 'Sơ đồ tổ chức',
    desc: 'Chúng tôi tin tưởng rằng một quy trình quản lý hiệu quả là nền tảng cho sự phát triển, mang lại sự vững mạnh về tài chính, lòng tin cho nhà đầu tư và hiệu quả cho hoạt động doanh nghiệp.'
  },
  {
    title: 'Chặng đường phát triển',
    desc: 'Với bề dày lịch sử 60 năm hình thành và phát triển, Chúng tôi luôn tạo ra những giá trị bền vững cho tất cả các thành viên trong chuỗi hoạt động.'
  },
  {
    title: 'Chứng nhận & Giải thưởng',
    desc: 'Chúng tôi có chứng nhận Tiêu chuẩn quốc tế dành cho các Nhà sản xuất bao bì.'
  },
]
function Design({ lang, dataDesign }) {
  return (
    <div className='design md:pt-[3.56rem] pt-[6.93rem]'>
      <div className='md:ml-auto md:w-[65.4375rem] md:pr-[14.44rem] max-md:px-[4.27rem]'>
        <h3 dangerouslySetInnerHTML={{ __html: `${dataDesign?.heading}` }} className='md:text-[3.4375rem] text-[6.93333rem] text-[#444] leading-[1.2] md:tracking-[-0.12375rem] tracking-[-0.208rem] title'>
        </h3>
        <ul className='md:grid grid-cols-2 list-content gap-x-[3.19rem] gap-y-[1.87rem] mt-[3.25rem] flex flex-col'>
          {dataDesign?.aboutCompany?.map((item, index) => (
            <li key={index} className={`text-[1.35417rem] md:pt-[2.19vw] pt-[4.8rem] border-t border-solid max-md:pb-[4rem] border-[#888] ${index === 0 ? 'max-md:border-none' : ''}`}>
              <h4 className='font-bold text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] mb-[1.35417vw]'>{item?.title}</h4>
              <p className='text-[#888] md:text-[1.5rem] tracking-[-0.04063rem] lg:text-[1.35417rem] text-[4.26667rem] text-justify'>{item?.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex md:px-[9.43rem] mt-[5.4rem] md:gap-[5.16rem] items-center max-md:flex-col'>
        <div className="left md:w-[36.7rem] max-md:bg-[#444545] flex flex-col items-center">
          <Image src={titleImg} width={'100%'} height={'100%'} className='max-md:hidden' alt='title' />
          <div className='md:hidden flex text-[#fff] font-bold items-center w-full max-md:px-[4.27rem]'>
            <span className='text-[22.93333rem] leading-[1.2]'>&</span>
            <span className='text-[8.53333rem] leading-[1.2] w-[60rem] relative bottom-[-2rem]'>THIẾT KẾ
              THÀNH CÔNG</span>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: `${dataDesign?.textAnimation?.description}` }}
            className='md:text-[1.5rem] tracking-[-0.06771rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.2] max-md:text-[#fff] max-md:my-[6rem] max-md:px-[4.27rem] text-justify' >
          </p>
        </div>
        <div className="right">
          <Image src={dataDesign?.textAnimation?.image?.sourceUrl} width={500} height={500} alt='box' className='md:w-[39.27rem] md:h-[47.76rem] h-[67.46667rem] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Design