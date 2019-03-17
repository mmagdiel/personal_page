import React from 'react'
import { Main } from './styles'
import theme from '../utils/theme'
import Global from '../utils/global'
import { url, lang } from '../utils/i18n'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { ThemeProvider } from 'styled-components'

export default ({ children, location }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const language = lang(location)   
                const { edges } = data.allMarkdownRemark
                const url_lang = url(location, edges)
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
        allMarkdownRemark {
            edges {
                node {
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