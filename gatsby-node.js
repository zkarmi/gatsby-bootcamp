const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  // get our createPage() function
  const { createPage } = actions

  // retrieve our blog template file
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // build our Contentful query using GraphQL
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // create our pages (iterating over `.edges`)
  data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // define our template file
      path: `/blog/${edge.node.slug}`, // set our dynamic path
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// // For Markdown implementation: Generate Slugs
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

// // For Markdown implementation: Create Pages using Slugs
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // 1. Get path to template
//   const blogTemplate = path.resolve("./src/templates/blog.js")

//   // 2. Get markdown data
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   // 3. Create new pages
//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `/blog/${edge.node.fields.slug}`,
//       context: {
//         slug: edge.node.fields.slug,
//       },
//     })
//   })
// }
