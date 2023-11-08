import prize1 from '@/assets/imgs/prize-1.jpg'
import prize2 from '@/assets/imgs/prize-2.jpg'
import prize3 from '@/assets/imgs/prize-3.jpg'
import Image from 'next/image'

export const IndexPrize = () => {
  const data = [
    { img: prize1, name: 'FSSC22000' },
    { img: prize1, name: 'ISO 9001:2015' },
    { img: prize1, name: 'ISO 9001:2015' },
    { img: prize1, name: 'ISO 9001:2015' },
    { img: prize2, name: 'ISO 15378:2017' },
    { img: prize2, name: 'GMI' },
    { img: prize2, name: 'FSC' },
    { img: prize2, name: 'ISO 15378:2017' },
    { img: prize3, name: 'ISO 15378:2017' },
    { img: prize3, name: 'ISO 15378:2017' },
  ]
  return (
    <div className='md:px-[9.46rem] px-[4.27rem] mt-[4.32rem] pb-[15.4rem]'>
      <h2 className='heading max-md:w-[70%]'>Chứng chỉ & Giải thưởng</h2>
      <div className='grid md:grid-cols-4 grid-cols-2 md:mt-[3.2rem] mt-[15rem] md:gap-[6.5rem] max-md:gap-x-[8.27rem] max-md:gap-y-[12.8rem] justify-items-center'>
        {data?.map((item, index) => (
          <div key={index * Math.random()} className='flex flex-col items-center justify-center'>
            <Image src={item?.img} width={'100%'} height={'100%'} alt='prize' className='md:w-[14.89vw] w-[41.86667rem] object-cover' />
            <span className='md:text-[1.6rem] text-[4.26667rem] text-[#888] mt-[1.5rem]'>{item?.name}</span>
          </div>
        ))}
      </div>
      <p className='md:text-[1.66667rem] text-[4.26667rem] leading-[111.662%] tracking-[-0.064rem] md:tracking-[-0.025rem] text-[#888] md:mt-[2.66rem] mt-[6.23rem] text-center'>Giải thưởng bao bì Việt Nam 2022</p>
    </div>

  )
}
