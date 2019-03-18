import React from 'react'
import { graphql } from 'gatsby'
import { Section } from '../components/content/styles'
export default ({ data }) => {
    const { title } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark
    return(
        <Section
            m={ 17 }
            maxWidth={[ 317, 353, 757, 1013, 1571 ]} 
            flexWrap='wrap'
            flexDirection='column'
        >

            <h1>{ title }</h1>
            <div dangerouslySetInnerHTML={{__html:html }} />
        </Section>
    )
}

export const query = graphql`
    query($pathSlug: String! ) {
        markdownRemark (
            frontmatter: {
                path: {
                    eq: $pathSlug
                }
            } 
        ) {
            html
            frontmatter {
              title
            }
          }

    }
`