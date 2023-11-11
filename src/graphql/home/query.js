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
            textOnBottom
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

export {
    GET_DATA_HEADER,
    GET_DATA_FOOTER,
    GET_DATA_HOMEPAGE
}