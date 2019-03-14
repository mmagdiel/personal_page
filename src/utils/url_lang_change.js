export default (location, menu, itemsOther, blog, blogsOther) => {
    const { pathname } = location
    const { items } = itemsOther
    const temp = []
    const tempOther = []
    blog.forEach( el => {
        const { path } = el.node.frontmatter
        const { id } = el.node.frontmatter
        temp.push({url: path, id})
    })
    menu.forEach(el=> {
        const { url } = el
        const { id } = el
        temp.push({url, id})
    })
    blogsOther.forEach(el=> {
        const { path } = el.node.frontmatter
        const { id } = el.node.frontmatter
        tempOther.push({url: path, id})
    })
    items.forEach(el=> {
        const { url } = el
        const { id } = el
        tempOther.push({url, id})
    })
    const elOther = tempOther.filter(el => {
        const { url } = el
        return url === pathname
    })

    const [ { id } ] = elOther
    const el = temp.filter(el => {
        return el.id === id
    })
    const [ { url } ] = el
    return url
}
