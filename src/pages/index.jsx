import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <g.H1
        display={ 'inline-block' }
        margin={ rhythm(1 / 4) + ' 0' }
      >
        Ein weiterer generischer Blog.
      </g.H1>

      <g.H4 margin={ rhythm(1) + ' 0 0 0' }>{ data.allContentfulBlogPost.totalCount }&nbsp;Einträge</g.H4>

      {data.allContentfulBlogPost.edges.map(({ node }, index) =>

        <div key={ index }>

          <Link to={ node.pfad }>
          <g.H3 margin={ rhythm(2.5) + ' 0 ' + rhythm(1 / 2) + ' 0' }>

            { node.titel }&nbsp;

            <g.Span color={ '#BBB' }>&ndash;&nbsp;{ node.createdAt }</g.Span>

          </g.H3>
          </Link>

          <p>{ node.childContentfulBlogPostBeschreibungTextNode.childMarkdownRemark.excerpt }</p>
          
          <g.P
            margin={ rhythm(1 / 4) + ' 0 0 0' }
            opacity={ 1 }
            fontWeight={ 'bold' }
          >{ node.childContentfulBlogPostBeschreibungTextNode.childMarkdownRemark.timeToRead }&nbsp;Minute Lesezeit</g.P>

        </div>
      )}
    </div>
  )
};

export const query = graphql`
  query IndexQuery
  {
    allContentfulBlogPost {
      totalCount
      edges {
        node {
          titel
          pfad
          createdAt(formatString: "DD MMMM, YYYY", locale: "de")
          childContentfulBlogPostBeschreibungTextNode {
            childMarkdownRemark {
              excerpt(pruneLength: 160)
              timeToRead
            }
          }
        }
      }
    }
  }  
  `
