import { API_CONFIG, END_POINTS } from "../../env"

const connectToTopCategory = async () => {

	// if(typeof(window) != 'object')
	{
		const url = `${API_CONFIG.apiDomain}${END_POINTS.CATALOG_API.top}?subcategory=true&t=124&partnerId=68&campaignId=2691&storeId=77&appid=skavastore&locale=en_US`
		const response = await fetch(url)
		.then(function(response) {  
			return response.json()
		})
		.then(function(myJson) {
			return myJson
        })
        return response
	}

}

export default connectToTopCategory
export { connectToTopCategory }
