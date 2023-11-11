import Image from 'next/image'

export const IndexPrize = ({data}) => {
  const dataPrize = data?.data?.page?.translation
  console.log('dataPrize',dataPrize?.prize?.content?.listPrize);
  return (
    <div className='md:px-[9.46rem] px-[4.27rem] mt-[4.32rem] pb-[15.4rem]'>
      <h2 className='heading max-md:w-[70%]'>{dataPrize?.prize?.content?.heading}</h2>
      <div className='md:flex grid grid-cols-2 justify-center flex-wrap md:mt-[3.2rem] mt-[15rem] md:gap-[6.5rem] max-md:gap-x-[8.27rem] max-md:gap-y-[12.8rem] justify-items-center'>
        {dataPrize?.prize?.content?.listPrize?.map((item, index) => (
          <div key={index * Math.random()} className='flex flex-col items-center justify-center'>
            <Image src={item?.image?.sourceUrl} width={10000} height={10000} quality={100} alt={item?.image?.altText || 'prize'} className='md:w-[14.89vw] w-[41.86667rem] object-cover' />
           { item?.name && <span className='md:text-[1.6rem] text-[4.26667rem] text-[#888] mt-[1.5rem]'>{item?.name}</span>}
          </div>
        ))}
      </div>
      <p className='md:text-[1.66667rem] text-[4.26667rem] leading-[111.662%] tracking-[-0.064rem] md:tracking-[-0.025rem] text-[#888] md:mt-[2.66rem] mt-[6.23rem] text-center'>{dataPrize?.prize?.content?.subtitle}</p>
    </div>

  )
}
