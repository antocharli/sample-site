import React from 'react'
const bannerImage = require('../../../assets/images/banner.jpg')

class ImageGallery extends React.Component {
    render() {
        return(
            <img src={bannerImage} alt="" />
        )
    }
}

export default ImageGallery