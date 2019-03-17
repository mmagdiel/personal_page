import React from 'react'
import Icon from './icon'
import HTML2React from 'html2react'

export default (props) => {
    const { children } = props
    return (
        <>
            {
                (typeof window !== 'undefined' ? <Icon {...props}>
                { HTML2React(children) }
                </Icon> : null)
            }
        </>
    )    
}