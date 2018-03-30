const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogpost.jsx')
    resolve(
      graphql(`
        {
          allContentfulBlogPost (limit: 100) {
            edges {
              node {
                id
                pfad
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          createPage ({
            path: edge.node.pfad,
            component: blogPostTemplate,
            context: {
              path: edge.node.pfad
            }
          })
        })
        return
      })
    )
  })
}