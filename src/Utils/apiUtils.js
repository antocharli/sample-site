import { API_CONFIG } from '../env'
import 'isomorphic-fetch'

async function fetchResponseFromAPI(apiConfig) {
    const { url, headers = {}, requestType = 'GET', containerName, pathParams } = apiConfig
    const combinedHeaders = Object.assign(headers, API_CONFIG.commonHeaders) 
    const finalUrl = url + (pathParams ? `?pathParams=${pathParams}` : '')

    const ModifiedHeader = new Headers(combinedHeaders)

    return await fetch(finalUrl, 
    {
        "method": requestType,
        "mode": "cors",
        'headers': ModifiedHeader
    }
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonResponse) {
        if(typeof window === undefined)
        {
            return Promise.resolve({[containerName]: jsonResponse})
        }
        const response = ({[containerName]: jsonResponse})
        return response
    })
}

function setLocalStorage(storageName, storageItem) {
    try {
        if(typeof window !== 'undefined') {
            localStorage.setItem(storageName, JSON.stringify(storageItem))
        }
    }
    catch(e) {
        console.error('Exception in storage', e)
    }
}

function getLocalStorage(storageName) {
    try {
        if(typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem(storageName))
        }
    }
    catch(e) {
        console.error('Exception in storage', e)
    }
}

export default fetchResponseFromAPI
export { fetchResponseFromAPI, setLocalStorage, getLocalStorage }