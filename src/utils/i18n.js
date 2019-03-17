import menu from '../../contents/menu'
import { find, propEq, compose, curry } from 'ramda'

export const linkI18n =  (url, language) => {
    if(language === 'es') {
        return compose(findItemEsMenuById, findItemEnMenuByUrl)(url)
    } else {
        return url
    }
}

const findItemEnMenuByUrl = (url) =>{
    const { items } = menu.menu.en
    const temp = find(propEq('url',url))(items)
    const { id } = temp ? temp : {}
    return id
}

const findItemEsMenuById = (id) => {
    const { items } = menu.menu.es
    const temp = find(propEq('id',id))(items)
    const { url } = temp ? temp : {}
    return url
}

const findItemEsMenuByUrl = (url) =>{
    const { items } = menu.menu.es
    const temp = find(propEq('url',url))(items)
    const { id } = temp ? temp : {}
    return id
}

const findItemEnMenuById = (id) => {
    const { items } = menu.menu.en
    const temp = find(propEq('id',id))(items)
    const { url } =  temp ? temp : {}
    return url
}

const findItemBlogByUrl = (blog,url) => {
    const temp = find(propEq('path',url))(blog)
    const { id } = temp ? temp : {}
    return id
}

const findItemBlogById = (blog,id) => {
    const temp = find(propEq('id',id))(blog)
    const { path } = temp ? temp : {}
    return path
}

const flatEs = (obj) => {
    const temp = []
    const tem2 = obj.filter(el => el.node.frontmatter.language === 'es')
    tem2.map(el => temp.push(el.node.frontmatter))
    return temp
}

const flatEn = (obj) => {
    const temp = []
    const tem2 = obj.filter(el => el.node.frontmatter.language === 'en')
    tem2.map(el => temp.push(el.node.frontmatter))
    return temp
}

const byUrl = curry(findItemBlogByUrl)
const byId = curry(findItemBlogById)

export const url = (location, blog) => {
    const { pathname } = location
    const language = lang(location)
    if(language === 'es') {        
        const temp = compose(findItemEnMenuById, findItemEsMenuByUrl)(pathname)
        if (!temp) {
            const blogFlatEs = flatEs(blog)
            const blogFlatEn = flatEn(blog)
            const byu = byUrl(blogFlatEs)
            const byi = byId(blogFlatEn)
            const tem2 = compose(byi, byu)(pathname)
            const res = tem2 ? tem2 : '/'
            return res
        }
        return temp
    } else {
        const temp = compose(findItemEsMenuById,findItemEnMenuByUrl)(pathname)
        if (!temp) {
            const blogFlatEn = flatEn(blog)
            const blogFlatEs = flatEs(blog)
            const byu = byUrl(blogFlatEn)
            const byi = byId(blogFlatEs)
            const tem2 = compose(byi, byu)(pathname)
            const res = tem2 ? tem2 : '/'
            return res
        } 
        return temp
    }
}

export const lang = (location) => {
    const { pathname } = location
    const indicator = pathname.search('/es')
    return (indicator < 0 ? 'en' : 'es')
}
