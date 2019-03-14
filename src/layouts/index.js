import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Main } from './styles'
import theme from '../utils/theme'
import Global from '../utils/global'
import lang from '../utils/lang_checker'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { ThemeProvider } from 'styled-components'
import url from '../utils/url_lang_change'

export default ({ children, location }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const { edges } = data.allMarkdownRemark
                const [ { node } ] = data.allContentsJson.edges.filter(el => el.node.menu !== null)
                const { menu } = node
                const language = lang(location)   
                const blogs = edges.filter(el => el.node.frontmatter.language !== language)
                const { items } = (language !== 'es' ? menu.es : menu.en)
                const blogsOther = edges.filter(el => el.node.frontmatter.language === language)
                const itemsOther = (language === 'es' ? menu.es : menu.en)
                const url_lang = url(location, items, itemsOther, blogs, blogsOther) 
                return(
                    <ThemeProvider theme={ theme }>
                        <>
                            <Global />
                            <Header 
                                language={language}
                                url_lang={url_lang}
                            />
                            <Main
                                alignItems='center'
                                justifyContent='center'
                                flex='1'
                                flexDirection='column'
                            >
                                { children }
                            </Main>
                            <Footer 
                                language={language}
                            />
                        </>
                    </ThemeProvider>
                )
            }}
        />
    )
}

const query = graphql`
    query {
        allContentsJson {
            edges {
                node {
                    id
                    menu {
                        es {
                            items {
                                title
                                url
                                id
                            }
                        }
                        en {
                            items {
                                title
                                url
                                id
                            }
                        }
                    }
                }
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        language
                        path
                        id
                    }
                }
            }
        }  
    }
`

// maxWidth={[ 317, 353, 757, 1013, 1571 ]} 
// flexDirection={['row','row','row','column','column']}