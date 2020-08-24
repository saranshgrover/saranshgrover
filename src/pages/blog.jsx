import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Listing, Wrapper, Title } from '../components'
import website from '../../config/website'
import { LocaleContext } from '../components/Layout'
import SEO from '../components/SEO'

const IndexWrapper = Wrapper.withComponent('main')

const Blog = ({ data: { posts }, pageContext: { locale }, location }) => {
  const lang = React.useContext(LocaleContext)

  return (
    <>
      <SEO pathname={location.pathname} locale={locale} />
      <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Title style={{ marginTop: '4rem' }}>All Posts</Title>
        <Listing posts={posts.edges} />
      </IndexWrapper>
    </>
  )
}

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogQuery($locale: String!) {
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }, 
    filter: 
    { lang: { eq: $locale }
    })
      {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
