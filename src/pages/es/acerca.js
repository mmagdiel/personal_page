import React from 'react'
import { lang } from '../../utils/i18n'
import About from '../../components/content/about'
import Skills from '../../components/content/skills'
import Hobbies from '../../components/content/hobbies'
import Attitudes from '../../components/content/attitudes'
import Education from '../../components/content/education'
import Experience from '../../components/content/experience'

export default ({ location }) => {
    const language = lang(location)
    return (
        <>
            <About 
                language={ language }
            />
            <Education 
                language={ language } 
            />
            <Experience
                language={ language } 
            />
            <Skills 
                language={ language } 
            />
            <Attitudes 
                language={ language } 
            />
            <Hobbies 
                language={ language } 
            />
        </>
    )
}