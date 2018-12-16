const Loading = '../Views/Components/Loading'

const pageNames = {
    home: '/home',
    about: '/about',
    article: '/article',
}

const pathParams = [
    {
        path: pageNames.home,
        pageName: 'Home',
    },
    {
        path: pageNames.about,
        pageName: 'About',
    },
    {
        path: pageNames.article,
        pageName: 'Article',
    }
]

export default pathParams
export { pathParams, pageNames }