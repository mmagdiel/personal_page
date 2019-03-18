import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Text, Flex } from 'rebass'
import { Media, Section, Article } from '../styles'
import Icons from '../../effect/icons'
import { Attitudes } from '../../../utils/contents'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const attitudes = Attitudes(data)
                const { title } = (language === 'es' ? attitudes.node.attitudes.es : attitudes.node.attitudes.en)
                const { icon } = (language === 'es' ? attitudes.node.attitudes.es : attitudes.node.attitudes.en)
                const { viewBox } = (language === 'es' ? attitudes.node.attitudes.es : attitudes.node.attitudes.en)
                const { items } = (language === 'es' ? attitudes.node.attitudes.es : attitudes.node.attitudes.en)
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
                                items.map((el,i) => {
                                    return(
                                            <Media
                                                key={i}
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