import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { Text, Heading, Button } from 'rebass'
import { Section, Article } from '../styles'
import { linkI18n } from '../../../utils/i18n'
import { Intro } from '../../../utils/contents'

export default ({ language }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const [ { node } ] = data.allFile.edges
                const { publicURL } = node
                const intro = Intro(data)
                const { welcome } = (language === 'en' ? intro.node.intro.en : intro.node.intro.es )
                const { callToAction } = (language === 'en' ? intro.node.intro.en : intro.node.intro.es )
                const { message } = (language === 'en' ? intro.node.intro.en : intro.node.intro.es )
                const url = linkI18n('/contact/', language)
                return (
                    <Section
                        backgroundImage={`url(${publicURL})`}
                        backgroundSize={'100% 100%'}
                        width='100%'
                        height='93vh'
                        justifyContent='flex-end'
                        alignItems='flex-end'
                        pr='15%'
                        pb='15vh'
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
                                onClick={()=>navigate(url)}
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