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
        requestProfile
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


const GET_ALL_SEARCH_BY_SERVER = (offset = 0, lang = "VI", text = '') => {
    return `{allJobOpportunity(
    where: {language: ${lang} , search: "${text}", offsetPagination: {offset: ${offset}, size: 4}, orderby: {field: DATE, order: DESC}}
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

const  GET_DATA_NEW_JOBS = `query getdataJobNew($language: LanguageCodeEnum!) {
  allJobOpportunity(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      translation(language: $language) {
        slug
        recruimentDetail {
          infoJob {
            nameJob
            applyText
            icon {
              altText
              sourceUrl
            }
            listInfoDetail{
              title
              text
            }
          }
        }
      }
    }
  }
}`
export {
    GET_DATA_RECRUIMENT_DETAIL,
    GET_DATA_NEW_JOBS,
    GET_DATA_RECRUIMENT_PAGE,
    GET_ALL_SEARCH_BY_SERVER
}