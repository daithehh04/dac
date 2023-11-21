import React from 'react'
import Image from 'next/image'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'

export const IndexOrganize = ({ data, lang, slugPage, titlePage }) => {
  const dataOrganize = data?.data?.page?.translation
  return (
    <section>
      <Banner
        image={dataOrganize?.organize?.banner?.imageBanner?.sourceUrl}
        altText={dataOrganize?.organize?.banner?.imageBanner?.altText}
        textAboutUs={dataOrganize?.organize?.banner?.textBanner}
        check={true}
      />
      <main className='content pb-[2.31rem]'>
        <TitlePage_About_Us check={3} lang={lang} slugPage={slugPage} titlePage={titlePage} />
        <h1 className='heading pl-[5.47rem] mt-[4.32rem]'>{dataOrganize?.organize?.content?.heading}</h1>
        <Image src={dataOrganize?.organize?.content?.diagram?.sourceUrl} width={1600} quality={100} height={1000} alt={dataOrganize?.organize?.content?.diagram?.altText || 'organize'} className='mt-[4.5rem] md:w-[91.25rem] md:h-[49.53125rem] object-contain w-[91.2rem] h-[49.86667rem]' />
        <div className='flex justify-center md:mt-[3rem] mt-[9.6rem] max-md:mb-[9.3rem] max-md:flex-col'>
          {data?.data?.page?.translation?.organize?.content?.summary?.map((item, index) => (
            <p
              className={`lg:text-[1.047rem] md:text-[1.4rem] text-[2.93333rem] text-[#888] ${index === 0 ? 'md:mr-[7.68rem]' : ''}`}
              key={index}
              dangerouslySetInnerHTML={{ __html: `${item?.text}` }}>
            </p>
          ))}
        </div>
      </main>
    </section>
  )
}
