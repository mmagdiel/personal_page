import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const Icons = ({ viewBox, fill, width, height, children }) => {
    return (
        <Icon 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox={ viewBox }
            fill={ fill } 
            width={ width } 
            height={ height }
        >
            { children }
        </Icon>
    )
}

Icons.propType = {
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
}

export default Icons