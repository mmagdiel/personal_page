import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Header, Nav } from '../styles'
import { Button, Image, Text } from 'rebass'
import Icons from '../../effect/icons'
import { IconBut, LinkIcon } from './styles'

export default ({ language, url_lang }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const [ { node } ] = data.allFile.edges
                const { publicURL } = node
                const { name } = node
                const [  temp ] = data.allContentsJson.edges.filter(el => el.node.menu !== null)
                
                //                const [ ella ] = edges.filter(el =>  el.node.childContentsJson !== null)
                const { viewBox } = temp.node.menu
                const { icon } = temp.node.menu
                const { items } = (language === 'es' ? temp.node.menu.es : temp.node.menu.en)
                const [main, ...others] = items
                const { url } = main
                const langOther = (language !== 'es' ? 
                'es'.charAt(0).toUpperCase() + 'es'.slice(1) : 'en'.charAt(0).toUpperCase()+ 'en'.slice(1))
                return (
                    <Header 
                        justifyContent='space-around'
                        alignItems='center'
                        height={ 71 }
                        boxShadow='0 5px 7px #ccc' 
                        backgroundImage='linear-gradient(90deg, #e8ffdd, #235e07)'
                    >
                        <Link to={ url }>
                            <Image 
                                width={ 51 }
                                src={ publicURL } 
                                alt={ name } 
                                borderRadius={ 8 }
                            />
                        </Link>
                        <Nav>
                            {
                                others.map(el => {
                                        return(
                                            <Link to={ el.url }>
                                                <Button
                                                    bg='transparent'
                                                >
                                                    { el.title }
                                                </Button>
                                            </Link>
                                        )
                                    }
                                )
                            }
                            <LinkIcon to={ url_lang }>
                                <IconBut
                                    bg='transparent'
                                    justifyContent='space-between'
                                    alignItems='center'
                                >
                                    <Icons
                                        width={32}
                                        height={32}
                                        fill={'#fff'}
                                        viewBox={viewBox}
                                    >
                                        { icon }
                                    </Icons>
                                    <Text
                                        m={1}
                                    >
                                        { langOther }
                                    </Text>
                                </IconBut>
                            </LinkIcon>
                        </Nav>
                    </Header>
                )}
            }
        />
    )
}

const query = graphql`
    query {
        allFile(
            filter: {
                name: {
                    eq: "logo"
                }
            } 
        ) {
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
                    menu {
                        icon
                        viewBox
                        es {
                            items {
                                title
                                url
                                id
                            }
                        }
                        en {
                            items {
                                title
                                url
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`