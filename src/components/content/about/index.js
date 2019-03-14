import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Text, Card } from 'rebass'
import { Section, Aside, Article } from '../styles'

export default () => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const { edges } = data.allFile
                const [ el ] = edges.filter(el =>  el.node.childContentsJson === null)
                const [ ella ] = edges.filter(el =>  el.node.childContentsJson !== null)
                const { name } = el.node
                const { publicURL } = el.node
                const { quate } = ella.node.childContentsJson.about.es
                const { greeting } = ella.node.childContentsJson.about.es
                const { description } = ella.node.childContentsJson.about.es
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
        allFile(filter: {
                extension: {
                    in: ["jpg", "json"]
                }
            } 
        ) {
            edges {
                node {
                    name
                    publicURL
                    childContentsJson {
                        id
                        about {
                            es {
                                description
                                greeting
                                quate
                            }
                        }
                    } 
                }
            }
        }
    }
`