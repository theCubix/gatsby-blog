import React from 'react';
import g from 'glamorous';
import { css } from 'glamor';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

export default ({ children, data }) => 
  <div>
    <g.Div
      backgroundColor={ '#1c1c1a' }>
      <g.Div
        margin={'0 auto'}
        maxWidth={700}
        padding={'16px'}
        paddingTop={rhythm(1.5)}
      >
        <Link to={'/'}>
          <g.H3
            display={ 'inline-block' }
            fontStyle={ 'normal' }
            color={ '#C7B680' }
          >
            { data.site.siteMetadata.title }
          </g.H3>
        </Link>
        <Link 
          css={{ 
            float: 'right',
            color: '#DADADA',
            textDecorationColor: '#DADADA'
          }}
          to={'/about/'}
          >
            About
        </Link>
      </g.Div>
    </g.Div>

    {children()}

  </div>
  
  export const query = graphql`
  query LandingPageLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
