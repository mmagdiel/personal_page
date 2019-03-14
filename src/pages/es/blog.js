import React from 'react'
import { Link, graphql } from 'gatsby'
import lang from '../../utils/lang_checker'

export default ({ data, location }) => {
    const language = lang(location)
    //console.log(language)
    const { edges } = data.allMarkdownRemark
    const posts = edges.filter(({ node }) => (
        node.frontmatter.language === language
    ))
    //console.log(posts)
    return(
        <ul>
            {
                posts.map(el => {
                    const { title } = el.node.frontmatter
                    const { path } = el.node.frontmatter
                    return(
                        <li>
                            <Link to={path}>
                                {title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        tags
                        language
                        title
                        excerpt
                        date
                        path
                        cover {
                          id
                          publicURL
                        }
                    }
                }
            }
        }
    }
`