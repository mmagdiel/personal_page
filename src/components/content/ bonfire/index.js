import React from 'react'
import { 
    Player,
    ControlBar,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react'
import '../../../styles/video-react.css'
import { graphql, StaticQuery } from 'gatsby'
import { Box } from "rebass"
import { Section } from '../styles'

export default () => {
    const vw = (typeof window !== 'undefined' ?  window.innerWidth : null)
    const vh = (typeof window !== 'undefined' ?  window.innerHeight : null)
    const h = (vh - 71)
    const w = ( h / 9) *16
    const wr = Math.floor(vw - w - 17)
    // w = vw -17 
    // h = vh - 17
    return(
        <StaticQuery
            query={ query }
            render={ data => { 
                const { edges } = data.allFile
                const [ url ] = edges.map(el => el.node.publicURL)
                return(<Section>
                            <Player 
                                startTime={ 5000 }
                                autoPlay={ true }
                                loop={ true }
                                fluid={ false }
                                width={ w }
                                height={ h }
                            >
                                <source src={ url } />
                                <ControlBar>
                                    <CurrentTimeDisplay order={4.1} />
                                    <TimeDivider order={4.2} />
                                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                                    <VolumeMenuButton  />
                                </ControlBar>
                            </Player>
                            <Box 
                                width={ wr + 'px' } 
                            > 
                                dfsgsdfg
                            </Box>
                        </Section>
                    )
                }
            }
        />
    ) 
}

const query = graphql`
    query{
        allFile(filter: {
            extension: {
                eq: "mp4"
            
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