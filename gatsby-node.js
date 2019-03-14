const Path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, rej) => {
        const post = Path.resolve('src/templates/posts.js')
        console.log(post)
        resolve(
            graphql(`
                query {
                    allMarkdownRemark {
                        edges {
                            node {
                                id
                                frontmatter {
                                    tags
                                    path
                                    language
                                }
                            }
                        }
                    }
                }
            `).then(res => {
                const { edges } = res.data.allMarkdownRemark
                edges.forEach(({ node }) => {
                    const { path }  = node.frontmatter
                    const pathSlug = path
                    createPage({
                        path,
                        component: post,
                        context: {
                            pathSlug
                        }
                    })
                    resolve()
                })
            })
        )
    }) 
}