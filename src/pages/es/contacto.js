import React from 'react'
import Contact from '../../components/layout/contact'
import { lang }  from '../../utils/i18n'

export default ({ location }) => {
    const language = lang(location)
    return(
        <Contact 
            language={ language }
        />
    )
}
  
/*
import React, { useState, useEffect } from 'react'
import styled  from 'styled-components'

const Button = styled.button`
    border: 0;
    margin: 0;
    padding: 0;
    text-align: inherit;
    text-transform: inherit;
    font: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
    overflow: visible;

    display: inline-block;
    margin-bottom: ${ props => props.theme.u1 };
    padding: ${ props => props.theme.p1 };
    border: ${ props => props.theme.b_outlined_border_width } solid ${ props => props.theme.themePrimary };
    border-radius: 15px 2px 15px 2px;
    background-color: ${ props => props.theme.white };
    color: ${ props => props.theme.themePrimary };
    text-decoration: none;
    text-transform: uppercase;
    font-size: inherit;
    transition: all 1s ease;
    
    &:hover,
    &:focus,
    &:active {
        border-color: ${ props => props.theme.themeDark };
        background-color: ${ props => props.theme.themeDarker };
        color: ${ props => props.theme.white };
    }
    &:disabled{
        color: ${ props => props.theme.neutralDark };
        border: ${ props => props.theme.b_outlined_border_width } solid ${ props => props.theme.neutralDark };
        background-color: ${ props => props.theme.neutralSecondary };
        cursor: not-allowed;
    }
`

export default () => {
    const [formSubject, setSubject] = useState('')
    const [formEmail, setEmail] = useState('')
    const [formContent, setContent] = useState('')
    const [flagForm, setFlagForm] = useState(true)
    useEffect(() => {
        formSubject === '' &&
        formEmail === '' &&
        formContent === '' ? setFlagForm(true) : setFlagForm(false)
    })
    const email = (e) => setEmail(e.target.value)
    const subject = (e) => setSubject(e.target.value)
    const content = (e) => setContent(e.target.value) 
    return (
        <div>
            <form>
                <fieldset>
                    <label>Subject</label>
                    <input 
                        onChange={ subject }
                        value={ formSubject }
                    />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <input 
                        onChange={ email }
                        value={ formEmail }
                    />
                </fieldset>
                <fieldset>
                    <label>Content</label>
                    <input 
                        onChange={ content }
                        value={ formContent }
                    />
                </fieldset>
                <Button
                    disabled={ flagForm }
                >
                    Enviar
                </Button>
            </form>
        </div>
    )
}
*/