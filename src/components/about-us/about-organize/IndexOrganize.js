import React from 'react'
import img from '@/assets/imgs/diagram.jpg'
import Image from 'next/image'

export const IndexOrganize = () => {
  const data = [
    {
      desc: '<b>HĐQT</b>: <i>Hội đồng quản trị</i> <br/> <b>TKTM</b>: <i>Thiết kế mẫu tóc</i> <br/> <b>HCNS</b>: <i>Hành chính nhân sự</i> <br/> <b>TCKT</b>: <i>Tài chính kế toán</i> <br/> <b>KTCN</b>: <i>Kỹ thuật công nghệ</i>'
    },
    {
      desc: '<b>HĐQT</b>: <i>Hội đồng quản trị</i> <br/> <b>TKTM</b>: <i>Thiết kế mẫu tóc</i> <br/> <b>HCNS</b>: <i>Hành chính nhân sự</i> <br/> <b>TCKT</b>: <i>Tài chính kế toán</i> <br/> <b>KTCN</b>:<i> Kỹ thuật công nghệ</i>'
    },
  ]
  return (
    <div className='content pb-[2.31rem]'>
      <h2 className='heading pl-[5.47rem] mt-[4.32rem]'>Sơ đồ tổ chức</h2>
      <Image src={img} width={'100%'} height={'100%'} alt='organize' className='mt-[4.5rem] md:w-[91.25rem] md:h-[49.53125rem] w-[91.2rem] h-[49.86667rem]' />
      <div className='flex justify-center md:mt-[3rem] mt-[9.6rem] max-md:mb-[9.3rem] max-md:flex-col'>
        {data?.map((item, index) => (
          <p
            className='md:text-[1.047rem] text-[2.93333rem] text-[#888] mr-[7.68rem]'
            key={index}
            dangerouslySetInnerHTML={{ __html: `${item?.desc}` }}>
          </p>
        ))}
      </div>
    </div>
  )
}
