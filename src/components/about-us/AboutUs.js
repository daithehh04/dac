import Banner from './Banner'
import IndexVision from './about-vision/IndexVision'
import IndexJourney from './about-journey/IndexJourney'
import { DataProvider } from './DataContext'
import { Content } from './Content'

function AboutUs() {
  return (
    <DataProvider>
      <Banner/>
      <Content/>
    </DataProvider>
  )
}

export default AboutUs