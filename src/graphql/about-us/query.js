const GET_DATA_ABOUT_US_VISION = `
query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzk=") {
    translation(language: $language) {
      slug
      vision {
        banner {
          imagebanner {
            sourceUrl
            altText
          }
          textbanner
        }
        tilePage
        story {
          heading
          descriptionHeading
          image {
            sourceUrl
            altText
          }
          subdescription1
          subdescription2
        }
        motto{
          heading
          listMotto{
            icon{
              sourceUrl
              altText
            }
            description
          }
        }
      }
    }
  }
}
`

const GET_DATA_ABOUT_US_JOURNEY = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxNjg=") {
      translation(language: $language) {
        slug
        journey {
          banner {
            imagebanner {
              sourceUrl
              altText
            }
            textbanner
            titlePage
          }
          content {
            title
            description
            journey {
              img {
                sourceUrl
                altText
              }
              text
              year
            }
            subdescription
            subImage {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }`

const GET_DATA_ABOUT_US_PRIZE = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxNzQ=") {
      translation(language: $language) {
        slug
        prize {
          banner {
            imagebanner {
              sourceUrl
              altText
            }
            textbanner
          }
          titlePage
          content{
            heading
            subtitle
            listPrize{
              image{
                sourceUrl
                altText
              }
              name
            }
          }
        }
      }
    }
  }`

const GET_DATA_ABOUT_US_ORGANIZE = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxNzY=") {
      translation(language: $language) {
        slug
        organize {
          banner{
            imageBanner{
              sourceUrl
              altText
            }
            textBanner
          }
          titlePage
          content{
            heading
            diagram{
              sourceUrl
              altText
            }
            summary{
              text
            }
          }
        }  
      }
    }
  }`

export {
    GET_DATA_ABOUT_US_JOURNEY,
    GET_DATA_ABOUT_US_ORGANIZE,
    GET_DATA_ABOUT_US_VISION,
    GET_DATA_ABOUT_US_PRIZE
}