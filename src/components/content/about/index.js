import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Text, Card } from 'rebass'
import { Section, Aside, Article } from '../styles'
import { About } from '../../../utils/contents'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => {              
                const about = About(data)
                const [ { node } ] = data.allFile.edges
                const { name } = node
                const { publicURL } = node
                const { quate } = (language === 'en' ? about.node.about.en : about.node.about.es)
                const { greeting } = (language === 'en' ? about.node.about.en : about.node.about.es)
                const { description } = (language === 'en' ? about.node.about.en : about.node.about.es)
                return (
                    <Section
                        m={ 17 }
                        maxWidth={[ 317, 353, 757, 1013, 1571 ]} 
                        flexWrap='wrap'
                        flexDirection='row'
                        alignItems='stretch'
                        justifyContent='center'
                    >
                        <Article
                            m={ 3 }
                        >
                            <Card
                                width={[ 300, 311 ]}
                                mx='auto'
                                p={ 2 }
                                variant='primary'
                            >
                                <Image 
                                    width={ 300 } 
                                    src={ publicURL } 
                                    alt={ name } 
                                />
                                <Text
                                    textAlign='right'
                                >
                                    Magdiel Marquez
                                </Text>
                            </Card>
                        </Article>
                        <Aside
                            m={ 2 }
                            flex='0 1 307px'
                            flexDirection='column'
                            justifyContent='space-around'
                        >
                            <Text>
                                { greeting }
                            </Text>
                            <Text
                                lineHeight='normal'
                                fontSize={ 3 }
                            >
                                { description }
                            </Text>
                            <Text
                                lineHeight='normal'
                                fontSize={ 3 }
                                textAlign='right'
                            >
                                { quate }
                            </Text>
                        </Aside>
                    </Section>
                )}
            }
        />
    )
}

const query = graphql`
    query {
        allFile (
            filter:{
                name: {
                    eq: "me"
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
                    about {
                        es {
                            description
                            greeting
                            quate
                        }
                        en {
                            description
                            greeting
                            quate
                        }
                    }
                } 
            }
        }
    }
`
