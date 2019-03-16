import { END_POINTS } from '../../../../env'
import { fetchResponseFromAPI } from '../../../../Utils'

class CategoryContainer { 
	constructor(context, categoryId) {
		this.context = context
		this.categoryContainerName = 'category'
	}

	getCategory = async (categoryId) => {
		this.categoryContainerName = `category_${categoryId}`
        if(categoryId) {
			const url = `${END_POINTS.CATALOG_API.category}`
			if(typeof window === 'undefined') {
				this.context.load(	
						fetchResponseFromAPI({url, containerName: this.categoryContainerName, pathParams: `${categoryId}/products`})
					)
			} 
			else {
				const response = await fetchResponseFromAPI({url, containerName: this.categoryContainerName, pathParams: `${categoryId}/products`})
				this.setCategoryResponse(response)
				return response
			}
        }
        else {
            throw console.error('categoryId is missing')
        }
	}

	setCategoryResponse = (response) => {
		this.context.data = [response]
	}

	getCategoryData = (categoryId) => {
		this.categoryContainerName = `category_${categoryId}`
		const apiData = {}
		const response = this.context.data ? this.context.data : []
		if(response && response.length > 0) {
			response.forEach((data)=> {
				if(data[this.categoryContainerName]) {
					apiData.data = data[this.categoryContainerName]
				}
			})
		}
        // return transformCategory(apiData)
        return apiData
	}
}

export default CategoryContainer
export { CategoryContainer }