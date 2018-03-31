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


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match('^[^/]*/[^/]*$')) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "landingPage";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
};