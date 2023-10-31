import prize1 from '@/assets/imgs/prize-1.jpg'
import prize2 from '@/assets/imgs/prize-2.jpg'
import prize3 from '@/assets/imgs/prize-3.jpg'
import Image from 'next/image'

export const IndexPrize = () => {
  const data = [
    {img: prize1,name: 'FSSC22000'},
    {img: prize1,name: 'ISO 9001:2015'},
    {img: prize1,name: 'ISO 9001:2015'},
    {img: prize1,name: 'ISO 9001:2015'},
    {img: prize2,name: 'ISO 15378:2017'},
    {img: prize2,name: 'GMI'},
    {img: prize2,name:'FSC'},
    {img: prize2,name: 'ISO 15378:2017'},
    {img: prize3,name: 'ISO 15378:2017'},
    {img: prize3,name: 'ISO 15378:2017'},
  ]
  return (
    <div className='px-[9.46rem] mt-[4.32rem] pb-[15.4rem]'>
      <h2 className='heading'>Chứng chỉ & Giải thưởng</h2>
      <div className='grid grid-cols-4 mt-[3.2rem] gap-[6.5rem] justify-items-center'>
        {data?.map((item,index) => (
          <div key={index * Math.random()} className='flex flex-col items-center justify-center'>
            <Image src={item?.img} width={'100%'} height={'100%'} alt='prize' className='w-[14.89vw] object-cover'/>
            <span className='text-[1.6rem] text-[#888] mt-[1.5rem]'>{item?.name}</span>
          </div>
        ))}
      </div>
    </div>
    
  )
}
