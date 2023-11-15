import HomePage from "@/components/home/Home";
import getDataPage from "@/data/getDataPage";
import getDataHomePage from "@/data/homePage/getDataHomePage";
import { GET_DATA_HOMEPAGE } from "@/graphql/home/query";
import { GET_DATA_CATEGORY_PRODUCT_SERVICE } from "@/graphql/product/query";

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
