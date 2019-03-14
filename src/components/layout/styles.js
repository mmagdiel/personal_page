import styled from 'styled-components'
import {
    space,
    color,
    width,
    height,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    fontSize,
    backgroundImage,
    boxShadow
} from 'styled-system'

const themed = key => props => props.theme[key]

export const Footer = styled('footer')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        space,
        width,
        height,
        fontSize,
        color,
        flexWrap,
        flexDirection,
        alignItems,
        justifyContent,
        themed('Footer')
)

Footer.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}

export const Header = styled('header')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        space,
        width,
        height, 
        fontSize,
        color,
        flexWrap,
        flexDirection,
        backgroundImage,
        alignItems,
        boxShadow,
        justifyContent,
        themed('Header')
)

Header.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...backgroundImage.propTypes,
    ...boxShadow.propTypes,
    ...justifyContent.propTypes
}

export const Nav = styled('nav')({
    display: 'flex',
    boxSizing: 'border-box'
},
    space,
    width,
    fontSize,
    color,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    themed('Nav')
)

Nav.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}