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
function Design() {
  return (
    <div className='design pt-[3.56rem]'>
      <div className='ml-auto w-[65.4375rem] pr-[14.44rem]'>
        <h3 className='text-[3.4375rem] text-[#444] leading-[1.2] tracking-[-0.12375rem] title'>
          <b>CÔNG TY CP BAO BÌ VÀ IN NÔNG NGHIỆP</b> Bao gồm nhà máy tại Ngọc Hồi, Hưng Yên & Công ty DAC
        </h3>
        <ul className='grid grid-cols-2 list-content gap-x-[3.19rem] gap-y-[1.87rem] mt-[3.25rem]'>
          {data?.map((item,index) => (
            <li key={index} className='text-[1.35417rem] pt-[2.19vw] border-t border-solid border-[#888]'>
              <h4 className='font-bold text-[#444] mb-[1.35417vw]'>{item?.title}</h4>
              <p className='text-[#888]'>{item?.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex px-[9.43rem] mt-[5.4rem] gap-[5.16rem] items-center'>
        <div className="left w-[36.7rem] flex flex-col items-center">
          <Image src={titleImg} width={'100%'} height={'100%'} alt='title'/>
          <p className='text-[1.35417rem]' >Chúng tôi tự hào với đội ngũ <b>thiết kế chuyên nghiệp</b>, những người có thể <b>nâng tầm sản phẩm</b> của bạn bằng những thiết kế đồ họa độc đáo và đẹp mắt.</p>
        </div>
        <div className="right">
          <Image src={box} width={500} height={500} alt='box' className='w-[39.27rem] h-[47.76rem] object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Design