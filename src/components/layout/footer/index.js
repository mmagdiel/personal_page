import React from 'react'
//import { StaticQuery, graphql, Link } from 'gatsby'
import { Footer } from './styles'
//import { Image } from 'rebass'

export default () => {
    return (
        <Footer />
    )
}
/*
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
    }
`

        <StaticQuery 
            query={ query }
            render={ data => {
                const { edges } = data.allFile
                const [ imgPath ] = edges.map(el => el.node.publicURL)
                const [ imgName ] = edges.map(el => el.node.name)
                return (
                    <Footer
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Link to="/">
                            <Image 
                                width={ 51 }
                                src={ imgPath } 
                                alt={ imgName }
                            />
                        </Link>
                        <Link to="/">
                            <Image 
                                width={ 51 }
                                src={ imgPath } 
                                alt={ imgName }
                            />
                        </Link>
                        <Link to="/">
                            <Image 
                                width={ 51 }
                                src={ imgPath } 
                                alt={ imgName }
                            />
                        </Link>
                        <Link to="/contact">
                            <Image 
                                width={ 51 }            
                                src={ imgPath }
                                alt={ imgName }
                            />
                        </Link>
                    </Footer>
                )
            }}
        />
*/