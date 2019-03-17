import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
    const { edges } = data.allMarkdownRemark
    return(
        <ul>
            {
                edges.map((el,i) => {
                    const { title } = el.node.frontmatter
                    const { path } = el.node.frontmatter
                    return(
                        <li key={i}>
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
        allMarkdownRemark (
            filter:{
                frontmatter: {
                    language: {
                        eq: "en"
                    }
                } 
            }) {
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