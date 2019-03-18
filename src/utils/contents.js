import { filter } from 'ramda'

export const Menu = (data) => {
    const isNotNull = el => el.node.menu !== null
    const { edges } = data.allContentsJson
    const [ menu ] = filter(isNotNull, edges)
    return menu
}

export const About = (data) => {
    const isNotNull = el => el.node.about !== null
    const { edges } = data.allContentsJson
    const [ about ] = filter(isNotNull, edges)
    return about
}

export const Attitudes = (data) => {
    const isNotNull = el => el.node.attitudes !== null
    const { edges } = data.allContentsJson
    const [ attitudes ] = filter(isNotNull, edges)
    return attitudes
}

export const Education = (data) => {
    const isNotNull = el => el.node.education !== null
    const { edges } = data.allContentsJson
    const [ education ] = filter(isNotNull, edges)
    return education
}

export const Experience = (data) => {
    const isNotNull = el => el.node.experience !== null
    const { edges } = data.allContentsJson
    const [ experience ] = filter(isNotNull, edges)
    return experience
}

export const Hobbies = (data) => {
    const isNotNull = el => el.node.hobbies !== null
    const { edges } = data.allContentsJson
    const [ hobbies ] = filter(isNotNull, edges)
    return hobbies
}

export const Intro = (data) => {
    const isNotNull = el => el.node.intro !== null
    const { edges } = data.allContentsJson
    const [ intro ] = filter(isNotNull, edges)
    return intro
}

export const Projects = (data) => {
    const isNotNull = el => el.node.projects !== null
    const { edges } = data.allContentsJson
    const [ projects ] = filter(isNotNull, edges)
    return projects
}

export const Skills = (data) => {
    const isNotNull = el => el.node.skills !== null
    const { edges } = data.allContentsJson
    const [ skills ] = filter(isNotNull, edges)
    return skills
}

export const Contact = (data) => {
    const isNotNull = el => el.node.contact !== null
    const { edges } = data.allContentsJson
    const [ contact ] = filter(isNotNull, edges)
    return contact
}

export const Capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)