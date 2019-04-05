import { END_POINTS } from '../../../../env'
import { fetchResponseFromAPI, getLocalStorage, setLocalStorage } from '../../../../Utils'

class CategoryContainer { 
	constructor(context, categoryId) {
		this.context = context
		this.categoryContainerName = 'category'
	}

	getCategory = async (categoryId) => {
		this.categoryContainerName = `category_${categoryId}`
        if(categoryId) {
			const url = `${END_POINTS.CATALOG_API.category}`
			const loadParams = {
				url,
				containerName: this.categoryContainerName,
				pathParams: `${categoryId}/products`
			}

			if(typeof window === 'undefined') {
				this.context.load(
						fetchResponseFromAPI(loadParams)
					)
			}
			else {
				const localResponse = await this.getCategoryData(categoryId)
				const response = localResponse && localResponse.data ? localResponse : await fetchResponseFromAPI(loadParams)
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

		const localData = getLocalStorage(this.categoryContainerName)

		if(localData && localData.data) {
			return localData
		}
		else {
			return this.fetchCategoryResponse()
		}
		
	}
	fetchCategoryResponse() {
		const apiData = {}
		const response = this.context.data ? this.context.data : []
		if(response && response.length > 0) {
			response.forEach((data)=> {
				if(data[this.categoryContainerName]) {
					apiData.data = data[this.categoryContainerName]
				}
			})
		}
		const transformedResponse = this.transformCategory(apiData)
		setLocalStorage(this.categoryContainerName, transformedResponse)
		return transformedResponse
	}

	transformCategory(apiData) {
		return apiData
	}
}

export default CategoryContainer
export { CategoryContainer }