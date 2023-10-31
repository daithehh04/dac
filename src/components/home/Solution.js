import phone from '@/assets/imgs/phone.png'
import Image from 'next/image'

function Solution() {
  const desc = 'Giải pháp chống giả kỹ thuật số <br/> Giải pháp phân vùng - chống tràn hàng<br/>Giải pháp nhắn tin tích điểm tặng quà<br/>Giải pháp bảo hành điện tử<br/>Giải pháp truy xuất nguồn gốc sản phẩm'
  const text = 'Tự hào là <b>công ty đầu tiên tại Việt Nam</b> sản xuất và kinh doanh tem chống hàng giả kỹ thuật số, DAC chuyên cung cấp các <b>giải pháp toàn diện và tối ưu cho nhu cầu chống giả</b> cũng như quản lý phân phối hàng hóa. Tem kỹ thuật số DAC là một giải pháp tổng thể bao gồm nhiều tiện ích đi kèm.'
  return (
    <div className='flex solution'>
      <div className="left bg-[#444] w-[32.9rem] relative">
        <Image src={phone} width={'100%'} height={'100%'} alt='phone' className='absolute bottom-0 right-[-13rem] w-[56.25rem] h-[52.25rem] object-cover'/>
      </div>
      <div className="right w-[67.135rem] bg-[#B9B9B9] pb-[6.2rem] pl-[18.12rem] pr-[4.27rem]">
        <h3 className='text-[3.4375rem] text-[#444] font-bold leading-[1.2] tracking-[-0.12375rem] title w-[39.4rem] pt-[6.46rem]'>
          Công ty TNHH Công Nghệ Chống giả DAC
        </h3>
        <div className='text-[1.35417rem] text-[#444] mt-[3rem]' dangerouslySetInnerHTML={{__html: `${desc}`}}></div>
        <div className='text-[1.35417rem] text-[#444] mt-[13rem]' dangerouslySetInnerHTML={{__html: `${text}`}}></div>
      </div>
    </div>
  )
}

export default Solution