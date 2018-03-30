import React from 'react';

export default ({ data }) => 
  <div>
    <h1>Über «{data.site.siteMetadata.title}»</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius, error esse excepturi pariatur tempore quos omnis nostrum nemo est quod consequatur? Assumenda beatae in illo tenetur harum modi sint iste quam porro magni, vitae quibusdam neque eum ex nostrum consequatur deserunt, labore aut architecto? A et maiores, alias officiis quod cum enim minima.</p>
  </div>
  export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `

