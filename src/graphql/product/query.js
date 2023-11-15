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
query getDataCategoryProduct($language: LanguageCodeFilterEnum!) {
  allCategoryProducts(first: 100, where: {language: $language}) {
    nodes {
      slug
      product_category {
        info {
          title
          featureProduct
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


const GET_SLUG_FIRST_PRODUCT = `query ($language: LanguageCodeEnum!,$term:[String!]) {
  allServiceProduct(
    where: {taxQuery: {taxArray: {taxonomy: CATEGORYPRODUCTS, field: SLUG, operator: IN, terms: $term}}, orderby: {field: DATE, order: DESC}}
    first: 1
  ) {
    nodes {
      translation(language: $language) {
        slug
        id
        title
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
  GET_SLUG_FIRST_PRODUCT,
  GET_DATA_OTHER_PRODUCT
}