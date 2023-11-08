import Image from 'next/image'
import newsImg from '@/assets/imgs/news.jpg'

function News() {
  const data = [
    {
      title: 'Bao bì thông minh',
      text: 'Bao bì ngày nay không chỉ đẹp mà còn có nhiều công năng.'
    },
    {
      title: 'Máy Flexo mới hiện đại',
      text: 'Công ty mới đầu tư thêm máy Flexo nhiều màu mới.'
    },
    {
      title: 'Bao bì thông minh',
      text: 'Bao bì ngày nay không chỉ đẹp mà còn có nhiều công năng.'
    },
    {
      title: 'Bao bì thông minh',
      text: 'Bao bì ngày nay không chỉ đẹp mà còn có nhiều công năng.'
    },
  ]
  return (
    <div className='md:px-[4.17rem]'>
      <div className="news pt-[7.92rem]">
        <h3 className='md:text-[3.4375rem] text-[8.53333rem] text-[#444] font-bold leading-[1.2] tracking-[-0.12375rem] max-md:pl-[4.27rem]'>
          Tin tức
        </h3>
        <div className='flex gap-x-[2.71rem] max-md:flex-col md:mt-[3rem] mt-[6rem]'>
          <Image src={newsImg} width={'100%'} height={'100%'} alt='news' className='md:w-[44.58rem] md:h-[37.89rem] h-[84.9328rem]' />
          <ul className="grid md:grid-cols-2 gap-x-[1.82rem] gap-y-[2rem] max-md:px-[4.53rem]">
            {data?.map((item, index) => (
              <li key={index} className='text-[1.35417rem] md:pt-[3.07rem] pt-[5.02rem] md:border-t border-solid border-[#444]'>
                <h4 className='font-bold text-[#444] md:text-[1.35417rem] text-[4.26667rem]'>{item?.title}</h4>
                <p className='mt-[1.625rem] text-[#888] md:text-[1.35417rem] text-[4.26667rem]'>{item?.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default News