export const isProduction = !!process.env.isProduction

export const PROXY_PORT = 4040

export const API_CONFIG = {
    apiDomain: isProduction ? 'https://uxuidev.skavaone.com' : `http://localhost:${PROXY_PORT}`,
    storeId: 77,
    locale: 'en_US',
    basePath: '/skavastream/core/v5',
    serviceName: '/wrskavastore',
    partnerId: 68,
    campaignId: 2691,
    appid: 'skavastore'
}

export const END_POINTS = {
    CATALOG_API: {
        'top': `${API_CONFIG.basePath}${API_CONFIG.serviceName}/category/top`,
    }
}
