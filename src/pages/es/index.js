import React from 'react'
import lang from '../../utils/lang_checker'
import Intro from '../../components/content/intro'
import About from '../../components/content/about'
import Skills from '../../components/content/skills'
import Hobbies from '../../components/content/hobbies'
import Attitudes from '../../components/content/attitudes'

export default ({ location }) => {
    //const language = lang(location)
    return (
        <>
            <Intro />
        </>
    )
}
/*
<About 
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
*/