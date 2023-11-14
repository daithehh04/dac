const GET_DATA_PRODUCT_PAGE = `query getDataProductPage($language: LanguageCodeEnum!){
  page(id:"cG9zdDo0ODU="){
    translation(language:$language){
      product{
        banner{
          background{
            sourceUrl
            altText
          }
        }
        content{
          heading
          description
        }
      }
    }
  }
}
`
const GET_DATA_CATEGORY_PRODUCT_SERVICE = `
query getDataCategoryProduct ($language:LanguageCodeFilterEnum!){
  allCategoryProducts(first: 100, where: {language: $language}) {
    nodes {
      slug
      product_category {
        info {
          title
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}`

const GET_DATA_PRODUCT_DETAIL = `query getDataProduct_detail($language: LanguageCodeEnum!, $slug: ID!) {
  serviceProduct(id: $slug, idType: SLUG) {
    translation(language: $language) {
      product_detail{
        title
        aboutProduct{
          name
          description
        }
        listImages{
          image{
            sourceUrl
            altText
          }
        }
        subTitle
      }
    }
  }
}`

const GET_FIRST_PRODUCT_DETAIL = `query getFirstProductDetail($language: LanguageCodeEnum!) {
  allServiceProduct(first: 1, where: {orderby: {field: DATE, order: ASC}}){
    nodes{
      translation(language:$language){
        slug
      }
    }
  }
}`

const GET_DATA_OTHER_PRODUCT = `query getDataProduct_detail($language: LanguageCodeFilterEnum!) {
  allServiceProduct(where: {language: $language}) {
    nodes {
      slug
      featuredImage{
        node{
          sourceUrl
          altText
        }
      }
    }
  }
}`
export {
  GET_DATA_PRODUCT_PAGE,
  GET_DATA_CATEGORY_PRODUCT_SERVICE,
  GET_DATA_PRODUCT_DETAIL,
  GET_FIRST_PRODUCT_DETAIL,
  GET_DATA_OTHER_PRODUCT
}