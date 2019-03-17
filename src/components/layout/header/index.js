import React from 'react'
import { head, tail } from 'ramda'
import { Header, Nav } from '../styles'
import Icons from '../../effect/icons'
import { IconBut, LinkIcon } from './styles'
import { Button, Image, Text } from 'rebass'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Menu, Capitalize } from '../../../utils/contents'

export default ({ language, url_lang }) => {
    return (
        <StaticQuery 
            query={ query }
            render={ data => { 
                const menu = Menu(data)
                const [ { node } ] = data.allFile.edges
                const { items } = (language === 'es' ? menu.node.menu.es : menu.node.menu.en)
                const langOther = (language !== 'es' ? Capitalize('es') : Capitalize('en'))
                const Head = head(items)
                const Tail = tail(items) 
                return (
                    <Header 
                        justifyContent='space-around'
                        alignItems='center'
                        height={ 71 }
                        boxShadow='0 5px 7px #ccc' 
                        backgroundImage='linear-gradient(90deg, #e8ffdd, #235e07)'
                    >
                        <Link to={ Head.url }>
                            <Image 
                                width={ 51 }
                                src={ node.publicURL } 
                                alt={ node.name } 
                                borderRadius={ 8 }
                            />
                        </Link>
                        <Nav>
                            {
                                Tail.map(el => {
                                        return(
                                            <Link 
                                                to={ el.url }
                                                key={ el.id }
                                            >
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
                                        viewBox={ menu.node.menu.viewBox }
                                    >
                                        { menu.node.menu.icon }
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