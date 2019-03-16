export const isProduction = !!process.env.isProduction

export const PROXY_PORT = 4040

export const API_CONFIG = {
    proxyDomain: `http://localhost:${PROXY_PORT}`,
    apiDomain: 'https://ultaadmin.skavacommerce.com',
    catalogBasePath: '/orchestrationservices/storefront/catalogs',
    commonHeaders: {
        'x-store-id': '61',
        'locale': 'en_US',
        'Content-Type': 'application/json'
    }
}

export const END_POINTS = {
    CATALOG_API: {
        'top': `${API_CONFIG.proxyDomain}${API_CONFIG.catalogBasePath}/categories/top`,
        'category': `${API_CONFIG.proxyDomain}${API_CONFIG.catalogBasePath}/categories`,
    }
}
