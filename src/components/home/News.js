import Image from 'next/image'
import newsImg from '@/assets/imgs/news.jpg'

function News() {
  const data = [
    {
      title: 'Bao bì thông minh',
      text: 'Bao bì ngày nay không chỉ đẹp mà còn có nhiều công năng.'
    },
    {
      title: 'Bao bì thông minh',
      text: 'Bao bì ngày nay không chỉ đẹp mà còn có nhiều công năng.'
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
    <div className='content'>
      <div className="news pt-[7.92rem]">
        <h3 className='text-[3.4375rem] text-[#444] font-bold leading-[1.2] tracking-[-0.12375rem]'>
          Tin tức
        </h3>
        <div className='flex gap-x-[2.71rem] mt-[3rem]'>
          <Image src={newsImg} width={'100%'} height={'100%'} alt='news' className='w-[44.58rem] h-[37.89rem]'/>
          <ul className="grid grid-cols-2 gap-x-[1.82rem] gap-y-[2rem]">
            {data?.map((item,index) => (
              <li key={index} className='text-[1.35417rem] pt-[3.07rem] border-t border-solid border-[#444]'>
                <h4 className='font-bold text-[#444]'>{item?.title}</h4>
                <p className='mt-[1.625rem] text-[#888]'>{item?.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default News