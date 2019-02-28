import path from 'path'

function load3rdPartyAssets(server) {
    const assets = [
        {
            fileName: '/css/flat-icon.css',
            filePath: '../assets/css/flat-icon.css'
        },
        {
            fileName: '/css/common.css',
            filePath: '../assets/css/common.css'
        },
        {
            fileName: '/fonts/Flaticon.svg',
            filePath: '../assets/fonts/Flaticon.svg'
        },
        {
            fileName: '/fonts/Flaticon.eot',
            filePath: '../assets/fonts/Flaticon.eot'
        },
        {
            fileName: '/fonts/Flaticon.woff',
            filePath: '../assets/fonts/Flaticon.woff'
        },
        {
            fileName: '/fonts/Flaticon.ttf',
            filePath: '../assets/fonts/Flaticon.ttf'
        },
    ]
    
    assets.forEach((item, idx) => {
        server.get(item.fileName, function(req, res) {
            res.sendFile(path.resolve(__dirname, item.filePath))
        })
    })
    
    
}

export default load3rdPartyAssets
export { load3rdPartyAssets }