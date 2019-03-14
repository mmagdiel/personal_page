export default (location) => {
    const { pathname } = location
    const indicator = pathname.search('/es')
    return (indicator < 0 ? 'en' : 'es')
}

