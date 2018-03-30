import React from 'react';
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({ children, data }) => 
  <g.Div
    margin={'2em auto 0 auto'}
    maxWidth={650}
    padding={'16px'}
    paddingTop={rhythm(1.5)}
  >
    <Link to={'/'}>
      <g.H3
        margin={ '0 0 ' + rhythm(2) + ' 0'}
        display={'inline-block'}
        fontStyle={'normal'}
      >
        { data.site.siteMetadata.title }
      </g.H3>
    </Link>
    <Link css={{ float: 'right' }} to={'/about/'}>
      About
    </Link>

    {children()}

  </g.Div>
  
  export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
