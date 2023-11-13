import { gql } from '@apollo/client'

const GET_DATA_NEWS_DETAIL = `query ($language: LanguageCodeEnum!, $slug: ID!) {
  post(id: $slug, idType: SLUG) {
    translation(language: $language) {
      slug
      news {
        banner {
          title
          subtitle
          background {
            altText
            sourceUrl
          }
        }
        content {
          heading
          listcontent {
            titleContent
            text
            gallery {
              altText
              sourceUrl
            }
          }
        }
        othernews {
          ... on Post {
            slug
            news{
              name
            }
            featuredImage{
              node{
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
}`


const GET_ALL_NEWS = gql` 
query getAllNews($language: LanguageCodeEnum!, $offset: Int!, $size: Int!) {
    posts(where: {
      offsetPagination: {offset: $offset,size:$size}
        orderby:{field:DATE, order:ASC}		
        }
    ){
      nodes{
        translation(language:$language){
          id
          slug
          featuredImage{
            node{
              altText
              sourceUrl
            }
          }
          news{
            time
            name
          }
        }
      }
      pageInfo{
        offsetPagination{
          total
        }
      }
    }
}`

const DATA_BY_SEARCH_TEXT = gql`query ($text: String!, $language: LanguageCodeEnum!,$offset: Int!, $size: Int!) {
  posts(where: {search:$text,offsetPagination:{offset:$offset,size:$size} orderby:{field:DATE,order:DESC}}){
    nodes{
      translation(language:$language){
        slug
        featuredImage{
          node{
            altText
            sourceUrl
          }
        }
        news{
          name
          time
        }
      }
    }
    pageInfo{
      offsetPagination{
        total
      }
    }
  }
}`
export {
    GET_DATA_NEWS_DETAIL,
    GET_ALL_NEWS,
    DATA_BY_SEARCH_TEXT
}