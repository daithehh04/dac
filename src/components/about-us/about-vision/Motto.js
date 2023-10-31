import React from 'react'
import icon1 from '@/assets/imgs/phuong-cham1.svg'
import icon2 from '@/assets/imgs/phuong-cham2.svg'
import Image from 'next/image'
function Motto() {
  const data = [
    {
      icon: icon1,
      text: `<b>Với nhân viên</b>: Chúng tôi luôn cổ vũ tạo mọi điều kiện nhằm phát huy tính sáng tạo, sự toàn tâm và lòng nhiệt huyết của đội ngũ Nhân viên năng động, trung thành, có khả năng thích nghi cao và đáng tin cậy của Công ty
      `
    },
    {
      icon: icon2,
      text: `<b>Với khách hàng</b>: APP tư vấn, thiết kế và sản xuất ra các sản phẩm bao bì phù hợp, hiện đại, đầy tính sáng tạo với chi phí tối ưu, không ngừng cải tiến quy trình cho chất lượng và năng suất để hỗ trợ Quý khách hàng trong việc thúc đẩy kinh doanh và quảng bá thương hiệu.
 
      `
    },
    {
      icon: icon1,
      text: `<b>Với nhân viên</b>: Chúng tôi luôn cổ vũ tạo mọi điều kiện nhằm phát huy tính sáng tạo, sự toàn tâm và lòng nhiệt huyết của đội ngũ Nhân viên năng động, trung thành, có khả năng thích nghi cao và đáng tin cậy của Công ty
      `
    },
    {
      icon: icon2,
      text: `<b>Với khách hàng</b>: APP tư vấn, thiết kế và sản xuất ra các sản phẩm bao bì phù hợp, hiện đại, đầy tính sáng tạo với chi phí tối ưu, không ngừng cải tiến quy trình cho chất lượng và năng suất để hỗ trợ Quý khách hàng trong việc thúc đẩy kinh doanh và quảng bá thương hiệu.
 
      `
    },
    {
      icon: icon2,
      text: `<b>Với khách hàng</b>: APP tư vấn, thiết kế và sản xuất ra các sản phẩm bao bì phù hợp, hiện đại, đầy tính sáng tạo với chi phí tối ưu, không ngừng cải tiến quy trình cho chất lượng và năng suất để hỗ trợ Quý khách hàng trong việc thúc đẩy kinh doanh và quảng bá thương hiệu.
 
      `
    },
  ]
  return (
    <div className="content">
      <div className='flex gap-x-[15.6rem] pt-[3.65rem] pb-[5rem]'>
        <h3 className='heading whitespace-nowrap'>Phương châm</h3>
        <ul className='grid grid-cols-2 gap-x-[5.26rem] gap-y-[3rem]'>
            {data?.map((item,index) => (
              <li key={index} className='flex flex-col'>
                <Image src={item?.icon} width={'100%'} height={'100%'} alt='icon'/>
                <p className='text-[1.35417rem] mt-[1.46rem]' dangerouslySetInnerHTML={{__html: `${item?.text}`}}></p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Motto