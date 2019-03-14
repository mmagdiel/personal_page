import styled from 'styled-components'
import { Box } from 'rebass'
import { Link } from 'gatsby'

import {
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    fontWeight,
    borders,
    borderColor,
    borderRadius,
    buttonStyle,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const IconBut = styled(Box)({
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        display: 'flex'
    },
    fontWeight,
    borders,
    borderColor,
    borderRadius,
    buttonStyle,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    themed('Button')
)
  
IconBut.propTypes = {
    ...fontWeight.propTypes,
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...borderRadius.propTypes,
    ...buttonStyle.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}
  
IconBut.defaultProps = {
    as: 'button',
    fontSize: 'inherit',
    fontWeight: 'bold',
    m: 0,
    px: 3,
    py: 2,
    color: 'white',
    bg: 'blue',
    border: 0,
    borderRadius: 4,
}

export const LinkIcon = styled(Link)`
    text-decoration: none;
`