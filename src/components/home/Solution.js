import phone from '@/assets/imgs/phone.png'
import Image from 'next/image'

function Solution() {
  const desc = 'Giải pháp chống giả kỹ thuật số <br/> Giải pháp phân vùng - chống tràn hàng<br/>Giải pháp nhắn tin tích điểm tặng quà<br/>Giải pháp bảo hành điện tử<br/>Giải pháp truy xuất nguồn gốc sản phẩm'
  const text = 'Tự hào là <b>công ty đầu tiên tại Việt Nam</b> sản xuất và kinh doanh tem chống hàng giả kỹ thuật số, DAC chuyên cung cấp các <b>giải pháp toàn diện và tối ưu cho nhu cầu chống giả</b> cũng như quản lý phân phối hàng hóa. Tem kỹ thuật số DAC là một giải pháp tổng thể bao gồm nhiều tiện ích đi kèm.'
  return (
    <div className='flex solution max-md:flex-col'>
      <div className="left bg-[#444] md:w-[32.9rem] max-md:h-[109.3rem] relative max-md:flex flex-row-reverse">
        <div className='md:hidden w-[50%] bg-[#B9B9B9] h-full'></div>
        <Image src={phone} width={'100%'} height={'100%'} alt='phone' className='absolute bottom-0 max-md:h-full md:right-[-13rem] md:w-[56.25rem] md:h-[52.25rem] object-cover' />
      </div>
      <div className="right md:w-[67.135rem] md:bg-[#B9B9B9] bg-[#444] pb-[10.2rem] md:pl-[18.12rem] pl-[4.27rem] pr-[4.27rem]">
        <h3 className='md:text-[3.4375rem] text-[6.93333rem] md:text-[#444] text-[#fff] font-bold leading-[1.2] tracking-[-0.12375rem] title md:w-[39.4rem] pt-[6.46rem]'>
          Công ty TNHH Công Nghệ Chống giả DAC
        </h3>
        <div className='md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] leading-[1.4] md:text-[#444] text-[#fff] mt-[4rem] max-md:mb-[4rem]' dangerouslySetInnerHTML={{ __html: `${desc}` }}></div>
        <div className='md:text-[1.5rem] lg:text-[1.35417rem] max-md:hidden text-[4.26667rem] leading-[1.4] md:text-[#444] text-[#fff] mt-[13rem]' dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
        <span className='md:hidden text-[#fff] text-[4.26667rem] leading-[116.662%] underline tracking-[-0.21333rem]s'>Xem thêm</span>
      </div>
    </div>
  )
}

export default Solution