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
    <div className='content'>
      <div className="technical pt-[8.75rem] pb-[12rem]">
        <div>
          <Image src={titleImg} width={'100%'} height={'100%'} alt='title' className='ml-auto'/>
        </div>
        <div className='flex mt-[6.6rem] gap-x-[13rem]'>
          <div className="left">
            <ul className='grid gap-x-[7.8rem] grid-cols-2 gap-y-[2rem]'>
              {data?.map((item,index) => (
                <li key={index} className='text-[1.35417rem]'>
                  <Image src={item?.icon} width={'100%'} height={'100%'} alt='icon' className='w-[5.78125rem] h-[5.78125rem]'/>
                  <h4 className='text-[#444] font-bold mt-[1.25rem]'>{item?.title}</h4>
                  <p className='mt-[1.625rem] text-[#888]'>{item?.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="right text-[1.35417rem]">
            <p>Với năng lực máy <b>móc thiết bị hiện đại</b> cùng đội ngũ <b>nhân viên dày dặn kinh nghiệm</b>, Chúng tôi luôn có khả năng đáp ứng tất cả các nhu cầu đa dạng của Quý khách hàng.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technical