import 'isomorphic-fetch'

const listenAPIs = (proxyApp) => {
    const baseUrl = 'https://uxuidev.skavaone.com'

    proxyApp.get('/skavastream/core/v5/wrskavastore/category/top', (req, res) => {

        fetch(`${baseUrl}${req.originalUrl}`)
            .then(function(response) {
                return response.json()
            })
            .then(function(myJson) {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                return res.send((myJson))
            })
    })
}

const listenPort = (proxyApp) => {
    const PORT = 4040
    proxyApp.listen(PORT, () => {
        console.log(`proxy server is listening at ${PORT}`)
    })
}

function proxyServer(proxyApp) {
    listenAPIs(proxyApp)
    listenPort(proxyApp)
}

export default proxyServer
export { proxyServer }