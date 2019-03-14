import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Image, Text, Heading, Flex } from 'rebass'
import { Section, Article, Media } from '../styles'
import { Tooltip } from './styles'
import Icons from '../../effect/icons'
import chunk from '../../../utils/chunk'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const { edges } = data.allFile
                const el = edges.filter(el =>  el.node.childContentsJson === null)
                const [ ella ] = edges.filter(el =>  el.node.childContentsJson !== null)
                const { title } = (language === 'es' ? 
                    ella.node.childContentsJson.skills.es : ella.node.childContentsJson.skills.en)
                const { icon } = (language === 'es' ? 
                    ella.node.childContentsJson.skills.es : ella.node.childContentsJson.skills.en)
                const { viewBox } = (language === 'es' ? 
                    ella.node.childContentsJson.skills.es : ella.node.childContentsJson.skills.en)
                const { items } = (language === 'es' ? 
                    ella.node.childContentsJson.skills.es : ella.node.childContentsJson.skills.en)
                const merge = el.map(e => {
                        const temp = items.filter(ee => (
                            ee.icon === e.node.name)
                        )
                        return {...e.node, ...temp[0]}
                    }
                )
                const vw = (typeof window !== 'undefined' ?  window.innerWidth : null)
                const n = (vw > 1400 ? 7 : (
                            vw > 750 ? 5 : (
                                vw > 450 ? 3 : 2)
                            )
                        )
                const temp = merge.filter(el => el.icon !== undefined)
                temp.sort(
                    (el,ella) => {
                        if(el.order > ella.order) {
                            return 1
                        }
                        if(el.order < ella.order) {
                            return -1
                        }
                        return 0
                })
                const a = (temp.length / n)
                const b = Math.ceil(a) - a
                const c = Math.round(b * n)
                const fake = Array(c).fill(0)
                const dummy = {"publicURL": "", "name": "", "icon": ""}
                fake.forEach(() => temp.push(dummy))
                const arr = chunk(temp,n)
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
                        {
                            arr.map(el => {
                                return (
                                    <Article
                                        m={1}
                                        flexDirection='row'
                                    >
                                        {
                                            el.map(ella => {
                                                const { publicURL } = ella
                                                const { name } = ella
                                                const { icon } = ella
                                                const flag = publicURL ? 'visible' : 'hidden' 
                                                const { description } = ella
                                                const { order } = ella
                                                return (
                                                    <Tooltip
                                                        aria-label={ description }
                                                        visibility={ flag }
                                                        order={ order }
                                                        flex="1"
                                                    >
                                                        <Media
                                                            size={[126,96]}
                                                            flexDirection='column'
                                                            justifyContent='space-between'
                                                            p={ 1 }
                                                            m={ 2 }
                                                            variant='icons'
                                                        >
                                                            <Image 
                                                                width={3/4}
                                                                src={ publicURL } 
                                                                alt={ icon } 
                                                            />
                                                            <Text
                                                                alignSelf='flex-end'
                                                                fontSize={ 2 }
                                                                textAlign='right'
                                                            >
                                                                { name }
                                                            </Text>
                                                        </Media> 
                                                    </Tooltip>
                                                )}
                                            )
                                        }
                                    </Article>
                                )
                            })
                        }
                    </Section>
                )}
            }
        />
    )
}

const query = graphql`
    query {
        allFile(
            filter: {
                extension: {
                    in: ["svg", "json"]    
                }
            } 
        ) {
            edges {
                node {
                    name
                    publicURL
                    childContentsJson {
                        id
                        skills {
                            es {
                                title
                                icon
                                viewBox
                                items {
                                    name
                                    icon
                                    order
                                    description
                                }
                            }
                            en {
                                title
                                icon
                                viewBox
                                items {
                                    name
                                    icon
                                    order
                                    description
                                }
                            }
                        }
                    } 
                }
            }
        }
    }
`