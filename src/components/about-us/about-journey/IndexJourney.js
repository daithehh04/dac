import React from 'react'
import History from './History'
import HistoryMobile from './HistoryMobile'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'

function IndexJourney({ data, lang, slugPage, titlePage }) {
  const dataJourney = data?.data?.page?.translation
  return (
    <>
      <Banner
        id={'banner_journey'}
        image={dataJourney?.journey?.banner?.imagebanner?.sourceUrl}
        altText={dataJourney?.journey?.banner?.imagebanner?.altText}
      />
      <main>
        <TitlePage_About_Us lang={lang} slugPage={slugPage} titlePage={titlePage} />
        <div className='mt-[5.31rem]'>
          <div className='content' id='contentHisMb'>
            <h3 className='heading max-md:mb-[5rem]'>{dataJourney?.journey?.content?.title}</h3>
            <p className='lg:text-[1.35417rem] text-[4.26667rem] md:text-[1.5rem] md:mt-[1.6rem] md:tracking-[-0.02708rem] text-justify md:w-[44.375rem]' dangerouslySetInnerHTML={{ __html: `${dataJourney?.journey?.content?.description}` }}></p>
          </div>
          <History data={dataJourney?.journey?.content} />
          <HistoryMobile data={dataJourney?.journey?.content} />
        </div>
      </main>
    </>
  )
}

export default IndexJourney