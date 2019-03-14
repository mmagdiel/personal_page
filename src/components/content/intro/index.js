import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { Image, Text, Card, Heading, Button } from 'rebass'
import { Section, Aside, Article } from '../styles'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const [ { node } ] = data.allFile.edges
                const { publicURL } = node
                const edges = data.allContentsJson.edges.filter(el => el.node.intro !== null)
                const  [  intro  ] = edges.map(el => {
                    return language === 'es' ? el.node.intro.es : el.node.intro.en
                })
                const { welcome } = intro
                const { callToAction } = intro
                const { message } = intro
                const vw = (typeof window !== 'undefined' ?  window.innerWidth : null)
                const vh = (typeof window !== 'undefined' ?  window.innerHeight : null)
                const h = (vh - 71)
                const w = (vw - 17)
                const paddingButton = Math.round(h*0.15) 
                const paddingRight = Math.round(w*0.15) 
                return (
                    <Section
                        backgroundImage={`url(${publicURL})`}
                        backgroundSize={'100% 100%'}
                        width={w}
                        height={h}
                        justifyContent='flex-end'
                        alignItems='flex-end'
                        pr={paddingRight}
                        pb={paddingButton}
                    >
                        <Article
                            flexDirection='column'
                        >
                            <Heading
                                color='white'
                            >
                                {welcome}
                            </Heading>
                            <Text
                                color='white'
                            >
                                {message}
                            </Text>
                            <Button
                                color='white'
                                onClick={()=>navigate('/contact')}
                            >
                                {callToAction}
                            </Button>
                        </Article>
                    </Section>
                )}
            }
        />
    )
}

const query = graphql`
    query {
        allFile(
            filter:{
                name: {
                    eq: "john-moeses"
                }
            }) {
            edges {
                node {
                    name
                    publicURL
                }
            }
        }
        allContentsJson {
            edges {
                node {
                    intro{
                        es {
                            welcome
                            callToAction
                            message
                        }
                        en {
                            welcome
                            callToAction
                            message
                        }
                    }
                } 
            }
        }
    }
`