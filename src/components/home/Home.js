import React from 'react'
import Banner from './Banner'
import Design from './Design'
import Product from './Product'
import Technical from './Technical'
import Solution from './Solution'
import News from './News'
import VideoSlide from './VideoSlide'
import Partners from './Partners'

function HomePage({ lang, data, dataProductList,dataNewsHome }) {
  const dataBanner = data?.data?.page?.translation?.homepage?.banner
  const dataDesign = data?.data?.page?.translation?.homepage?.designSuccess
  const dataProduct = data?.data?.page?.translation?.homepage?.productAndService
  const dataTechnology = data?.data?.page?.translation?.homepage?.technology
  const dataSolution = data?.data?.page?.translation?.homepage?.solution
  const dataNews = data?.data?.page?.translation?.homepage?.news
  const dataPartner = data?.data?.page?.translation?.homepage?.partners
  const dataSlideVideo = data?.data?.page?.translation?.homepage?.slideVideo
  return (
    <>
      <Banner dataBanner={dataBanner} dataDesign={dataDesign} lang={lang} />
      <Design dataDesign={dataDesign} lang={lang} />
      <Product dataProductList={dataProductList} dataProduct={dataProduct} lang={lang} />
      <Technical dataTechnology={dataTechnology} lang={lang} />
      <Solution dataSolution={dataSolution} />
      <News dataNews={dataNews} dataNewsHome={dataNewsHome} lang={lang} />
      <VideoSlide dataSlideVideo={dataSlideVideo} />
      <Partners dataPartner={dataPartner} />
    </>
  )
}

export default HomePage