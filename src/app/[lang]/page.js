import HomePage from "@/components/home/Home";
import { fetchData } from "@/data/fetchData";
import getDataPage from "@/data/getDataPage";
import getDataHomePage from "@/data/homePage/getDataHomePage";
import { GET_DATA_HOMEPAGE, GET_META_HOME } from "@/graphql/home/query";
import { getMeta } from "@/graphql/metaData/getMeta";
import { GET_DATA_CATEGORY_PRODUCT_SERVICE } from "@/graphql/product/query";



export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(GET_META_HOME, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}
export default async function Page({ params: { lang } }) {

  // get data hompage
  let language = lang.toUpperCase()
  let data = await getDataHomePage(language, GET_DATA_HOMEPAGE)
  let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
  return (
    <main>
      <HomePage
        data={data}
        lang={lang}
        dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
      />
    </main>
  )
}
