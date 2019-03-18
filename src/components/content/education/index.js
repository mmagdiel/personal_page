import React from 'react'
import { Education } from '../../../utils/contents'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Text, Heading, Flex } from 'rebass'
import { Section, Article, Aside } from '../styles'
import Icons from '../../effect/icons'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const education = Education(data)
                const { edges } = data.allFile
                const { items } = (language === 'es' ? education.node.education.es : education.node.education.en )
                const { title } = (language === 'es' ? education.node.education.es : education.node.education.en )
                const { viewBox } = (language === 'es' ? education.node.education.es : education.node.education.en )
                const { icon } = (language === 'es' ? education.node.education.es : education.node.education.en )
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
                                const { degree } = el
                                const { timeperiod } = el
                                const { description } = el
                                const { institution } = el
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
                                                width={110}
                                                height={110}
                                            />
                                        </Aside>
                                        <Article
                                            m={ 1 }
                                            my={ 3 }
                                            flexDirection='column'
                                        >
                                            <Text>
                                                { institution }
                                            </Text>
                                            <Text>
                                                { degree + ', ' + timeperiod  }
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
                    education {
                        en {
                            title
                            icon
                            viewBox
                            items {
                                icon
                                degree
                                timeperiod
                                description
                                institution
                            }
                        }
                        es {
                            title
                            icon
                            viewBox
                            items {
                                icon
                                degree
                                timeperiod
                                description
                                institution
                            }
                        }
                    }
                }
            }
        }  
    }
`