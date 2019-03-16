import 'isomorphic-fetch'
import { API_CONFIG, END_POINTS } from '../src/env'
import { url } from 'inspector';
import { nextTick } from 'q';
const cors = require('cors')

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
    const baseUrl = API_CONFIG.apiDomain
    const relativeUrl = url.replace(API_CONFIG.proxyDomain, '')

    proxyApp.get(relativeUrl, async (req, res) => {
        const mockupHeaders = req.headers
        mockupHeaders.host = ''

        const pathParams = req.query.pathParams 
        const relativeUrlArray = req.originalUrl.split('?')
        const constructedUrl = `${baseUrl}${relativeUrlArray[0]}` + (pathParams ? `/${pathParams}` : '') + (relativeUrlArray[1] ? `?${relativeUrlArray[1]}` : '')

        const responseData = await fetch(constructedUrl, {
                headers: mockupHeaders,
            })
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
    const endpointKeys = Object.keys(END_POINTS)
    endpointKeys.forEach((serviceEndpoint, index) => {
        const serviceAPIs = END_POINTS[serviceEndpoint]
        const apiEndPoints = Object.keys(serviceAPIs)
        apiEndPoints.forEach((api, idx) => {
            initAPI(proxyApp, serviceAPIs[api])
        })
    })

    proxyApp.use(cors())
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