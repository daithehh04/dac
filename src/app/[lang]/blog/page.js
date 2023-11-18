import Blog from '@/components/blogs/Blog'
import { fetchData } from '@/data/fetchData'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_META_NEWS } from '@/graphql/news-blog/query'
import React from 'react'

export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(GET_META_NEWS, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}

function page({ params: { lang } }) {

  return (
    <Blog lang={lang} />
  )
}

export default page