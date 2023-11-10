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
export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default function RootLayout({ children, params }) {
  let lang = params.lang
  return (
    <html lang={lang}>
      <body>
        <ApolloClientProvider>
          <Suspense fallback={<Loader />}>
            <Navbar lang={lang} />
            {children}
            <Footer lang={lang} />
          </Suspense>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
