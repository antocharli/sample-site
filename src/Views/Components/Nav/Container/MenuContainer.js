import { API_CONFIG, END_POINTS } from '../../../../env'

export class MenuContainer {
	constructor(context) {
        this.context = context
        if(!this.context.data) {
            this.getMenu()
        }
	}

	getMenu = () => {		
		const url = `${API_CONFIG.apiDomain}${END_POINTS.CATALOG_API.top}?subcategory=true&t=124&partnerId=68&campaignId=2691&storeId=77&appid=skavastore&locale=en_US`

		this.context.load(	
				fetch(url)
				.then(function(response) {
					return response.json()
				})
				.then(function(myJson) {
					return myJson
				})
		)
	}

	getMenuData = () => {
		const apiData = {}
		const response = this.context.data ? this.context.data : []
		if(response && response.length > 0) {
			response.forEach((data)=> {
				if(data.home) {
					apiData.data = data.home
				}
			})
		}
		return apiData
	}
}