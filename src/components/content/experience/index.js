import React from 'react'
import { Experience } from '../../../utils/contents'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Text, Heading, Flex } from 'rebass'
import { Section, Article, Aside } from '../styles'
import Icons from '../../effect/icons'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const experience = Experience(data)
                const { edges } = data.allFile
                const { items } = (language === 'es' ? experience.node.experience.es : experience.node.experience.en )
                const { title } = (language === 'es' ? experience.node.experience.es : experience.node.experience.en )
                const { viewBox } = (language === 'es' ? experience.node.experience.es : experience.node.experience.en )
                const { icon } = (language === 'es' ? experience.node.experience.es : experience.node.experience.en )
                return(
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
                        {
                            items.map(el => {
                                const { company } = el
                                const { position } = el
                                const { timeperiod } = el
                                const { description } = el
                                const { icon } = el
                                const [ { node } ] = edges.filter(el => el.node.name === icon)
                                const { publicURL } = node
                                const { name } = node
                                return(<Flex
                                        my={ 2 }
                                    >
                                        <Aside
                                            m={ 1 }
                                        >
                                            <Image 
                                                src={publicURL}
                                                alt={name}
                                                width={100}
                                                height={100}
                                            />
                                        </Aside>
                                        <Article
                                            m={ 1 }
                                            my={ 3 }
                                            flexDirection='column'
                                        >
                                            <Text>
                                                { company }
                                            </Text>
                                            <Text>
                                                { position + '. ' + timeperiod}
                                            </Text>
                                            <Text>
                                                { description }
                                            </Text>
                                        </Article>
                                    </Flex>
                                )
                            })
                        }
                    </Section>
                )
            }}
        />
    )
}

const query = graphql`
    query {
        allFile(        
            filter: {
                extension: {
                    eq: "png"    
                    }
                } 
            ) {
            edges {
                node {
                    id
                    name
                    publicURL
                }
            }
        }
        allContentsJson {
            edges {
                node {
                    experience {
                        en {
                            title
                            icon
                            viewBox
                            items {
                                icon
                                company
                                position
                                timeperiod
                                description
                            }
                        }
                        es {
                            title
                            icon
                            viewBox
                            items {
                                icon
                                company
                                position
                                timeperiod
                                description
                            }
                        }
                    }
                }
            }
        }  
    }
`