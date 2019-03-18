import React from 'react'
import { lang } from '../../utils/i18n'
import Intro from '../../components/content/intro'

export default ({ location }) => {
    const language = lang(location)
    return (
        <>
            <Intro 
                language={ language }
            />
        </>
    )
}