import styled from 'styled-components'
import {
    flex,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const Main = styled('main')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        flex,
        flexWrap,
        flexDirection,
        alignItems,
        justifyContent,
        themed('Main')
)

Main.propTypes = {
    ...flex.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}