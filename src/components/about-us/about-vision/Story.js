import React from 'react'
import vision from '@/assets/imgs/vision.jpg'
import Image from 'next/image'

function Story() {
  const text = `<b>CÔNG TY CỔ PHẦN BAO BÌ VÀ IN NÔNG NGHIỆP</b> được thành lập vào năm 1963 và từ đó trở thành một trong những công ty hàng đầu ngành bao bì tại Việt Nam. Những năm đầu hình thành từ một xưởng in nhỏ phục vụ xuất bản phẩm (in sách, bản đồ) của Bộ Nông nghiệp, Công ty đã ngày một lớn mạnh, chuyển đổi mô hình sang sản xuất bao bì công nghiệp và có chỗ đứng trong thị trường bao bì Việt Nam. `
  const desc1 = `<b>TẦM NHÌN</b> trở thành doanh nghiệp hàng đầu trong lĩnh vực sản xuất bao bì tại Việt Nam, sẵn sàng cung cấp những thiết kế độc đáo và sản phẩm chất lượng nhất tới tay khách hàng, cùng phương châm đáp ứng mọi yêu cầu về yếu tố <b>“CHẤT LƯỢNG - SỐ LƯỢNG - TIẾN ĐỘ - GIÁ CẢ”</b>. `
  const desc2 = `<b>SỨ MỆNH</b> Doanh nghiệp làm việc lấy khách hàng là trung tâm và lấy thị trường là định hướng phát triển. Từng sản phẩm chất lượng đến tay khách hàng với sự hài lòng là thước đo cho sự thành công của công ty. Phát triển bền vững gắn liền với sứ mệnh đào tạo đội ngũ nhân lực chất lượng cao; nghĩa vụ đối với cộng đồng - môi trường; không ngừng gia tăng giá trị của cổ đông.  `
  return (
    <div className='md:px-[4.17rem]'>
      <div className='flex max-md:flex-col gap-x-[7.68rem] pt-[6.82rem] pb-[5.9rem] border-b border-solid border-[#444]'>
        <div className="left max-md:px-[4.27rem]">
          <h3 className='heading'>
            Câu chuyện APP
          </h3>
          <p className='md:text-[1.35417rem] text-[4.26667rem] tracking-[1.2] max-md:tracking-[-0.128rem] text-justify md:mt-[1.6rem] max-md:my-[6rem] text-[#444]' dangerouslySetInnerHTML={{ __html: `${text}` }}></p>
        </div>
        <div className="right">
          <Image src={vision} width={'100%'} height={'100%'} alt='vision' className='md:w-[52.55rem] md:h-[32.9rem] h-[62.63627rem] object-cover' />
          <div className='flex gap-x-[5.42rem] md:mt-[2.86rem] mt-[10.56rem] max-md:flex-col max-md:px-[4.27rem]'>
            <p className='md:text-[1.35417rem] text-[4.26667rem] text-justify text-[#444] leading-[1.2] max-md:mb-[10.56rem]' dangerouslySetInnerHTML={{ __html: `${desc1}` }}></p>
            <p className='md:text-[1.35417rem] text-[4.26667rem] text-justify text-[#444] leading-[1.2]' dangerouslySetInnerHTML={{ __html: `${desc2}` }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story