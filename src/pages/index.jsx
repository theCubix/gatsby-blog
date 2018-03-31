import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <g.Div
        backgroundColor={ '#1C1C1A' }
        paddingBottom={ rhythm(2) }
      >
        <g.Div
          margin={ '0 auto' }
          maxWidth={ 700 }
          padding={ '16px' }
        >
          <g.H1
            display={ 'inline-block' }
            margin={ rhythm(1 / 4) + ' 0' }
            color={ '#EDEDED' }
          >
            Der Blog von Max Forrer
          </g.H1>

          <g.P
            margin={ rhythm(1) + ' 0 0 0' }
            color={ '#C7B680' }
          >
            { data.allContentfulBlogPost.totalCount }&nbsp;Einträge
          </g.P>
        </g.Div>
      </g.Div>

      <g.Div 
        margin={'0 auto'}
        maxWidth={700}
        padding={'16px'}
      >
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
              opacity={ 0.8 }
              fontWeight={ 'bold' }
            >Ungefähr { node.childContentfulBlogPostBeschreibungTextNode.childMarkdownRemark.timeToRead == 1 ? '1 Minute' : node.childContentfulBlogPostBeschreibungTextNode.childMarkdownRemark.timeToRead + ' Minuten' } Lesezeit</g.P>

          </div>
        )}
      </g.Div>
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
