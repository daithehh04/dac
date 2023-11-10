import React from 'react'
import Banner from './Banner'
import Design from './Design'
import Product from './Product'
import Technical from './Technical'
import Solution from './Solution'
import News from './News'
import VideoSlide from './VideoSlide'
import Partners from './Partners'

function HomePage({ lang, data }) {
  const dataBanner = data?.data?.page?.translation?.homepage?.banner
  const dataDesign = data?.data?.page?.translation?.homepage?.designSuccess
  const dataProduct = data?.data?.page?.translation?.homepage?.productAndService
  const dataTechnology = data?.data?.page?.translation?.homepage?.technology
  const dataSolution = data?.data?.page?.translation?.homepage?.solution
  const dataNews = data?.data?.page?.translation?.homepage?.news
  const dataPartner = data?.data?.page?.translation?.homepage?.partners

  return (
    <>
      <Banner dataBanner={dataBanner} lang={lang} />
      <Design dataDesign={dataDesign} lang={lang} />
      <Product dataProduct={dataProduct} lang={lang} />
      <Technical dataTechnology={dataTechnology} />
      <Solution dataSolution={dataSolution} />
      <News dataNews={dataNews} />
      <VideoSlide />
      <Partners dataPartner={dataPartner} />
    </>
  )
}

export default HomePage