const GET_DATA_RECRUIMENT_DETAIL = `query getDataRecruitmentDetail($slug:ID!,$language:LanguageCodeEnum!){
  jobOpportunity(id: $slug, idType: SLUG) {
    translation(language:$language){
      slug
       recruimentDetail {
      banner {
        background {
          sourceUrl
          altText
        }
        title
        subTitle
      }
      content {
        heading
        description
        dataForm {
          title
          fullName
          email
          address
          dateOfBirth
          attachFile
          button
          telephone
        }
      }
    }
    }
  }
}`

const GET_DATA_RECRUIMENT_PAGE = `query ($language: LanguageCodeEnum!) {
  page(id:"cG9zdDo2NjU="){
    translation(language: $language){
      recruiment{
        banner{
          background{
            sourceUrl
            altText
          }
          title
          subTitle
        }
        content{
          heading
          description
          listCulture{
            icon{
              sourceUrl
              altText
            }
            title
            description
          }
          subTitle
        }
      }
    }
  }
}`

const GET_LIST_JOB_BY_SEARCH = `query getData($text: String!, $language: LanguageCodeFilterEnum!, $offset: Int!, $size: Int!) {
  allJobOpportunity(
    where: {language: $language, search: $text, offsetPagination: {offset: $offset, size: $size}, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      slug
      recruimentDetail {
        infoJob {
          icon {
            sourceUrl
            altText
          }
          nameJob
          listInfoDetail {
            title
            text
          }
          applyText
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`

const GET_ALL_SEARCH_BY_SERVER = (offset = 0, lang = "VI", text = '') => {
    return `{allJobOpportunity(
    where: {language: VI, search: "${text}", offsetPagination: {offset: ${offset}, size: 4}, orderby: {field: DATE, order: DESC}}
  ) {
    nodes {
      slug
      recruimentDetail {
        infoJob {
          icon {
            sourceUrl
            altText
          }
          nameJob
          listInfoDetail {
            title
            text
          }
          applyText
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
}`
}
export {
    GET_DATA_RECRUIMENT_DETAIL,
    GET_DATA_RECRUIMENT_PAGE,
    GET_ALL_SEARCH_BY_SERVER
}