import { gql } from '@apollo/client'

const GET_DATA_HOMEPAGE = `
    query($language : LanguageCodeEnum!){
    page(id:"cG9zdDoyMQ=="){
    translation(language:$language){
      homepage{
        banner{
          background{
            sourceUrl
          }
          slogan
          textfeature
        }
        designSuccess{
          heading
          aboutCompany{
            title
            description
          }
          textAnimation{
            textOnTop
            listTextScroll{
              text
            }
            description
            image{
              sourceUrl
            }
          }
        }
        productAndService{
          contentLeft{
            title
            description
          }
          
        }
        technology{
          heading{
            heading1
            heading2
          }
          description
          listTechnology{
            icon{
              sourceUrl
            }
            technologyName
            description
          }
        }
        solution{
          thumbnail{
            sourceUrl
          }
          title
          listSolution
          description
          seemore
        }
        news{
            heading
            image{
                sourceUrl
            }
          listNews{
            title
            description
          }
        }
        slideVideo{
          background{
            sourceUrl
          }
          video{
            sourceUrl
          }
        }
        partners{
          title
          subtitle
          heading
          listPartners{
            image{
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`

const GET_DATA_HEADER = `
    query($language : LanguageCodeEnum!){
        page(id:"cG9zdDoyMQ=="){
            translation(language:$language){
            homepage{
                header{
                  nav{
                      name
                  }
                }
              }
            }
        }
    }
`

const GET_DATA_FOOTER = `
query($language : LanguageCodeEnum!){
    page(id:"cG9zdDoyMQ=="){
    translation(language:$language){
      homepage{
         footer{
          logo{
           	sourceUrl
            altText
          }
          contentColumn1
          contentColumn2
          copyrightAndPolicy{
            copyright
            policy{
              text
            }
          }
      	}
      }
    }
  }
}
`
const GET_DATA_MOBILE_JOURNEY = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNjg=") {
    translation(language: $language) {
      slug
      journey {
        banner {
          titlePage
        }
      }
    }
  }
}`

const GET_DATA_MOBILE_PRIZE = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzQ=") {
    translation(language: $language) {
      slug
      prize {
        titlePage
      }
    }
  }
}`

const GET_DATA_MOBILE_ORGANIZE = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxNzY=") {
    translation(language: $language) {
      slug
      organize {
        titlePage
      }  
    }
  }
}`

const GET_DATA_MOBILE_VISION = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzk=") {
    translation(language: $language) {
      slug
      vision {
        tilePage
      }
    }
  }
}`
export {
  GET_DATA_HEADER,
  GET_DATA_FOOTER,
  GET_DATA_HOMEPAGE,
  GET_DATA_MOBILE_JOURNEY,
  GET_DATA_MOBILE_PRIZE,
  GET_DATA_MOBILE_ORGANIZE,
  GET_DATA_MOBILE_VISION
}