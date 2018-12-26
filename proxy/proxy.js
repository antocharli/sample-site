import 'isomorphic-fetch'
import { END_POINTS } from '../src/env'
import { url } from 'inspector';

const setHeaders = (res, headers) => {
    const headerKeys = Object.keys(headers)
    headerKeys.map(singleHeader => {
        if (singleHeader !== 'content-encoding' && singleHeader !== 'Content-Length') {
            res.setHeader(singleHeader, headers[singleHeader])
        }
    })
}

const getResponse = async (response)  => {
    response.data = await response.json()
}

const initAPI = (proxyApp, url) => {
    const baseUrl = 'https://uxuidev.skavaone.com'

    proxyApp.get(url, async (req, res) => {

        const responseData = await fetch(`${baseUrl}${req.originalUrl}`)
            .then(async (response) => {
                await getResponse(response)
                return response
            })
            .then(function(response) {
                return response
            })
            
            setHeaders(res, responseData.headers._headers)
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Transfer-encoding', '')
            res.send(responseData.data)
    })
}

const listenAPIs = (proxyApp) => {    
    initAPI(proxyApp, END_POINTS.CATALOG_API.top)
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