const pageNames = {
    home: '/',
    category: '/category',
}

const pathParams = [
    {
        path: pageNames.home,
        pageName: 'Home',
    },
    {
        path: `${pageNames.category}/:categoryId`,
        pageName: 'Category',
    },
]

export default pathParams
export { pathParams, pageNames }