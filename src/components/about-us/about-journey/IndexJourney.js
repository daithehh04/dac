import React from 'react'
import History from './History'
import HistoryMobile from './HistoryMobile'

function IndexJourney({data}) {
  const dataJourney = data?.data?.page?.translation
  return (
    <div className='mt-[5.31rem]'>
      <div className='content'>
        <h3 className='heading max-md:mb-[5rem]'>{dataJourney?.journey?.content?.title}</h3>
        <p className='lg:text-[1.35417rem] text-[4.26667rem] md:text-[1.5rem] md:mt-[1.6rem] text-justify md:w-[44.375rem]' dangerouslySetInnerHTML={{ __html: `${dataJourney?.journey?.content?.description}` }}></p>
      </div>
      <History data={dataJourney?.journey?.content} />
      <HistoryMobile data={dataJourney?.journey?.content} />
    </div>
  )
}

export default IndexJourney