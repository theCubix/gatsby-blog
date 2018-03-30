import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

class BlogPost extends Component {
  render() {
    const {
      titel,
      beschreibung
    } = this.props.data.contentfulBlogPost
    return (
      <div>
        <h1>{ titel }</h1>
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
      beschreibung {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`
