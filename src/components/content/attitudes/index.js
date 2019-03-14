import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Text, Flex } from 'rebass'
import { Media, Section, Article } from '../styles'
import Icons from '../../effect/icons'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const [ node ] = data.allContentsJson.edges
                const { attitudes } = node.node
                const { title } = (language === 'es' ? attitudes.es : attitudes.en)
                const { icon } = (language === 'es' ? attitudes.es : attitudes.en)
                const { viewBox } = (language === 'es' ? attitudes.es : attitudes.en)
                const { items } = (language === 'es' ? attitudes.es : attitudes.en)
                return (
                    <Section
                        m={ 17 }
                        maxWidth={[ 317, 353, 757, 1013, 1571 ]} 
                        flexWrap='wrap'
                        flexDirection='column'
                    >
                        <Flex
                            alignItems='flex-start'
                        >
                            <Icons
                                width={24}
                                height={24}
                                fill={'#000a'}
                                viewBox={viewBox}
                            >
                                { icon }
                            </Icons>
                            <Heading
                                m={1}
                            >
                                { title }
                            </Heading>
                        </Flex>
                        <Article>
                            {
                                items.map(el => {
                                    return(
                                            <Media
                                                p={ 1 }
                                                m={ 2 }
                                                alignItems='center'
                                            >
                                                <Icons
                                                    width={16}
                                                    height={16}
                                                    fill={'#000a'}
                                                    viewBox={el.viewBox}
                                                    >
                                                    { el.icon }
                                                </Icons>
                                                <Text
                                                    m={1}
                                                    fontSize={ 2 }
                                                    textAlign='right'
                                                >
                                                    { el.name }
                                                </Text>
                                            </Media>
                                        )
                                    }
                                )
                            }
                        </Article>
                     </Section>
                )}
            }
        />
    )
}

const query = graphql`
    query {
        allContentsJson {
            edges {
                node {
                    id
                    attitudes {
                        es {
                            title
                            viewBox
                            icon
                            items {
                            name
                            viewBox
                            icon
                            }
                        }
                        en {
                            title
                            viewBox
                            icon
                            items {
                            name
                            viewBox
                            icon
                            }
                        }
                    }
                }
            }
        }  
    }
`