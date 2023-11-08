import titleImg from '@/assets/imgs/title-sec3.svg'
import icon1 from '@/assets/imgs/tech1.svg'
import icon2 from '@/assets/imgs/tech2.svg'
import icon3 from '@/assets/imgs/tech3.svg'
import Image from 'next/image'
function Technical() {
  const data = [
    {
      icon: icon1,
      title: 'Công nghiệ in Offset',
      desc: 'Sản xuất bao bì chuyên dụng cao cấp, đa dạng trên các chất liệu: Giấy duplex, ivory, metalize, couche, bền ẩm, các loại giấy decal, …'
    },
    {
      icon: icon1,
      title: 'Công nghệ in Flexo',
      desc: 'Hệ thống phòng in Flexo chuẩn GMP sản xuất các sản phẩm in trên chất liệu giấy cuộn: Duplex, ivory, màng nhôm, decal, ...'
    },
    {
      icon: icon2,
      title: 'Công nghiệ in Ống đồng',
      desc: 'Sở hữu điểm nổi trội với độ chính xác, hình ảnh sắc nét, màu sắc bắt mắt trên các chất liệu: Nhựa, kim loại mỏng, PE, OPP, PET, …'
    },
    {
      icon: icon3,
      title: 'Công nghiệ in Kỹ thuật số',
      desc: 'Hệ thống in mã số, mã vạch, mã QR biến đổi cho tem nhãn với độ chính xác cao trên các chất liệu: decal cuộn, couche, …'
    },
  ]
  return (
    <section className="technical pt-[8.75rem] md:pb-[12rem] pb-[3rem] md:px-[4.17rem]">
      <div>
        <Image src={titleImg} width={'100%'} height={'100%'} alt='title' className='ml-auto max-md:hidden w-[67.5rem] h-[19.1667rem]' />
        <div className='md:hidden flex text-[#444] font-bold items-center w-full max-md:px-[4.27rem]'>
          <span className='text-[22.93333rem] leading-[1.2]'>&</span>
          <span className='text-[8.53333rem] leading-[1.2] w-[60rem] relative bottom-[-2rem]'>THIẾT KẾ
            THÀNH CÔNG</span>
        </div>
      </div>
      <div className='flex md:mt-[6.6rem] mt-[5.2rem] gap-x-[13rem] max-md:flex-col-reverse max-md:px-[4.27rem]'>
        <div className="left">
          <ul className='grid md:gap-x-[7.8rem] md:grid-cols-2 md:gap-y-[2rem] gap-[6rem] '>
            {data?.map((item, index) => (
              <li key={index} className='text-[1.35417rem]'>
                <Image src={item?.icon} width={'100%'} height={'100%'} alt='icon' className='md:w-[5.78125rem] md:h-[5.78125rem] w-[18.13333rem] h-[18.13333rem]' />
                <h4 className='text-[#444] font-bold md:mt-[1.25rem] my-[3rem] md:text-[1.35417rem] text-[4.26667rem]'>{item?.title}</h4>
                <p className='mt-[1.625rem] text-[#888] md:text-[1.35417rem] text-[4.26667rem]'>{item?.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="right md:text-[1.35417rem] text-[4.26667rem] tracking-[-0.08533rem] text-justify max-md:mb-[7rem]">
          <p>Với năng lực máy <b>móc thiết bị hiện đại</b> cùng đội ngũ <b>nhân viên dày dặn kinh nghiệm</b>, Chúng tôi luôn có khả năng đáp ứng tất cả các nhu cầu đa dạng của Quý khách hàng.</p>
        </div>
      </div>
    </section>
  )
}

export default Technical