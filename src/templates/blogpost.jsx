import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

class BlogPost extends Component {
  render() {
    const {
      titel,
      beschreibung,
      bild
    } = this.props.data.contentfulBlogPost
    return (
      <div>
        <h1>{ titel }</h1>
        <Img title={bild.title} alt={bild.description} resolutions={bild.resolutions} css={{ maxWidth: '100%' }} />
        <p>Ungefähr { beschreibung.childMarkdownRemark.timeToRead } Minute Lesezeit</p>
        <div dangerouslySetInnerHTML={{__html: beschreibung.childMarkdownRemark.html}} />
      </div>
    )
  }
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($path: String!){
    contentfulBlogPost(pfad: {eq: $path}) {
      titel
      pfad
      bild {
        title
        description
        resolutions(width: 700) {
          base64
          src
          aspectRatio
          srcSet
          height
          width
        }
      }
      beschreibung {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`
