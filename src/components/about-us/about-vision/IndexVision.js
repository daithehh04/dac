import React from 'react'
import Story from './Story'
import Motto from './Motto'

function IndexVision({data}) {
  const dataStory = data?.data?.page?.translation?.vision?.story
  const dataMotto = data?.data?.page?.translation?.vision?.motto
  return (
    <>
      <Story data={dataStory} />
      <Motto data={dataMotto} />
    </>
  )
}

export default IndexVision