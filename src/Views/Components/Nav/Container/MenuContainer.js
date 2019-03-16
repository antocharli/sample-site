import { END_POINTS } from '../../../../env'
import { fetchResponseFromAPI } from '../../../../Utils'
import { transformMenu } from './transform'
class MenuContainer {
	constructor(context) {
        this.context = context
        if(!this.context.data) {
            this.getMenu()
        }
	}

	getMenu = () => {		
		const url = `${END_POINTS.CATALOG_API.top}`
		this.context.load(	
				fetchResponseFromAPI({url, containerName: 'menu'})
			)
	}

	getMenuData = () => {
		const apiData = {}
		const response = this.context.data ? this.context.data : []
		if(response && response.length > 0) {
			response.forEach((data)=> {
				if(data.menu) {
					apiData.data = data.menu
				}
			})
		}
		return transformMenu(apiData)
	}
}

export default MenuContainer
export { MenuContainer }