function transformMenu(response) {

    const modifiedData = {
        "responseMessage": "success",
        "status": "success",
    }

    if(response && response.data) {
        const categories = response.data.category.subCategories.map((category, index)=> { return transformCategory(category, index)})
        modifiedData.categories = categories
        return modifiedData
    }
    else {
        return {
            "responseMessage": "failure",
            "status": "failure",
        }
    }
    
}

const transformCategory = (category, index) => {
    const transformedMenu = {
        name: category.properties.name,
        identifier: category.identifier,
        imageURL: category.properties.imageURL,
    }

    if(category.subCategories) {
        transformedMenu.subCategories = category.subCategories.map((category, index)=> { return transformCategory(category, index)})
    }

    return transformedMenu
}

export { transformMenu }
export default transformMenu