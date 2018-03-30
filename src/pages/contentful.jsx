import React from 'react';

export default ({ data }) => {
  return (
    <div>
      <h1>Meine Posts</h1>
      <table>
        <thead>
          <tr>
            <th>
              Titel
            </th>
            <th>
              Pfad
            </th>
            <th>
              Sprache
            </th>
            <th>
              Erstellt
            </th>
          </tr>
        </thead>
        <tbody>
          {data.allContentfulBlogPost.edges.map(({ node }, index) => 
            <tr key={ index }>
              <td>
                { node.titel }
              </td>
              <td>
                { node.pfad }
              </td>
              <td>
                { node.node_locale }
              </td>
              <td>
                { node.createdAt }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query MyPostsQuery
  {
    allContentfulBlogPost {
      edges {
        node {
          titel
          pfad
          node_locale
          createdAt(fromNow: true)
        }
      }
    }
  }  
  `
