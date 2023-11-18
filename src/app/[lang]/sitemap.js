import { fetchData } from "@/data/fetchData"

// tieu de
const NEWS_QUERY = `{
  posts(first: 100, where: {language: VI}) {
    nodes {
      slug
      date
    }
  }
}`


// opporturnity
const JOB_QUERY = `{
 allJobOpportunity(first:100, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`

// thuoc la, ...
const PRODUCT_QUERY = `{
 allServiceProduct(first:100, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`


export default async function sitemap() {
  const news = await fetchData(NEWS_QUERY)
  const jobs = await fetchData(JOB_QUERY)
  const products = await fetchData(PRODUCT_QUERY)

  const arrNews = news?.data?.posts?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/blog/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrJobs = jobs?.data?.allJobOpportunity?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/recruitment/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrProducts = products?.data?.allServiceProduct?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/service-products/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })

  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/service-products`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/design`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/vision`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/journey`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/prize`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/about-us/organize`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/blog`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/recruitment`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/contact`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/technology/offset`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/technology/flexo`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/technology/gravure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/technology/digital`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/technology/other-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    ...arrNews,
    ...arrJobs,
    ...arrProducts
  ]
}

