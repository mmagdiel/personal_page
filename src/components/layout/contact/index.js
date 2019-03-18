import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Article, Media } from '../../content/styles'
import Icons from '../../effect/icons'
import { Heading, Text, Flex } from 'rebass'
import { Contact } from '../../../utils/contents'

export default ({ language }) => {
    return (
        <StaticQuery 
        query={ query }
        render={ data => { 
            const contact = Contact(data)
            const { label } = (language === 'es' ? contact.node.contact.es : contact.node.contact.en)
            const { icon } = (language === 'es' ? contact.node.contact.es : contact.node.contact.en)
            const { viewBox } = (language === 'es' ? contact.node.contact.es : contact.node.contact.en)
            const { items } = (language === 'es' ? contact.node.contact.es : contact.node.contact.en)
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
                            { label }
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
                                                { el.nick }
                                            </Text>
                                        </Media>
                                    )
                                }
                            )
                        }
                    </Article>
                </Section>
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
                    contact {
                        en {
                            label
                            viewBox
                            icon
                            items {
                                label
                                icon
                                nick
                                viewBox
                            }
                        }
                        es {
                            label
                            viewBox
                            icon
                            items {
                                label
                                icon
                                nick
                                viewBox
                            }
                        }
                    }
                }
            }
        }
    }
`

/*
<Icons
width={16}
height={16}
fill={'#000a'}
viewBox={el.viewBox}
>
{ 'el.icon' }
</Icons>
*/