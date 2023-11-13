import Navbar from '@/components/common/Navbar'
import ApolloClientProvider from '../apolloProvider'
import './globals.css'
import Footer from '@/components/common/Footer'
import { Suspense } from 'react'
import Loader from './loading'
// Sass
import '@/scss/main.scss'
// fonts
import '../../assets/fonts/stylesheet.css'
// Swiper
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_FOOTER, GET_DATA_HEADER, GET_DATA_MOBILE_JOURNEY, GET_DATA_MOBILE_ORGANIZE, GET_DATA_MOBILE_PRIZE, GET_DATA_MOBILE_VISION } from '@/graphql/home/query'
export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default async function RootLayout({ children, params }) {
  let data
  let dataVision
  let dataJourney
  let dataOrganize
  let dataPrize
  let dataFooter
  let lang = params.lang
  data = await getDataPage(lang,GET_DATA_HEADER)
  dataVision = await getDataPage(lang,GET_DATA_MOBILE_VISION)
  dataJourney = await getDataPage(lang,GET_DATA_MOBILE_JOURNEY)
  dataOrganize = await getDataPage(lang,GET_DATA_MOBILE_ORGANIZE)
  dataPrize = await getDataPage(lang,GET_DATA_MOBILE_PRIZE)
  dataFooter = await getDataPage(lang,GET_DATA_FOOTER)
  const dataVisionFinal = dataVision?.data?.page?.translation
  const dataJourneyFinal = dataJourney?.data?.page?.translation
  const dataOrganizeFinal = dataOrganize?.data?.page?.translation
  const dataPrizeFinal = dataPrize?.data?.page?.translation
  const dataHeader = data?.data?.page?.translation?.homepage?.header?.nav
  const dataFooterFinal = dataFooter?.data?.page?.translation
  return (
    <html lang={lang}>
      <body>
        <ApolloClientProvider>
          <Suspense fallback={<Loader />}>
            <Navbar 
              dataHeader={dataHeader} 
              lang={lang}
              dataJourneyFinal={dataJourneyFinal} 
              dataVisionFinal={dataVisionFinal}
              dataOrganizeFinal={dataOrganizeFinal}
              dataPrizeFinal={dataPrizeFinal}
            />
            {children}
            <Footer lang={lang} data={dataFooterFinal} />
          </Suspense>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
