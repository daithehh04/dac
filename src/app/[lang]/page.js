import HomePage from "@/components/home/Home";
import getDataHomePage from "@/data/homePage/getDataHomePage";
import { GET_DATA_HOMEPAGE } from "@/graphql/home/query";

export default async function Page({ params: { lang } }) {

  // get data hompage
  let language = lang.toUpperCase()
  let data = await getDataHomePage(language, GET_DATA_HOMEPAGE)

  return (
    <main>
      <HomePage
        data={data}
        lang={lang}
      />
    </main>
  )
}
