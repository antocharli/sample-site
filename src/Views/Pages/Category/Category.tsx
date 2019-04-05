import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { ApiContent } from '../../../App/context'
import ProductBlock from '../../Components/ProductBlock'
import CategoryContainer from './Container'

const RenderCategoryItems = (response) => {
    const { items } = response
    
    if(items && items.length > 0) {
        const itemsArray = items.map((item, idx) => {
            return <ProductBlock key={idx} item={item}/>
        })
        return itemsArray
    }
    else {
        return <React.Fragment />
    }
}

@observer
class CategoryPage extends React.Component {
    static contextType = ApiContent
    categoryId = this.props.match.params.categoryId
    categoryObj = new CategoryContainer(this.context)

    scoped = {
        response: {}
    }

    @observable items = {}

    fetchDataFromAPI = async () => {
        if (!this.scoped.response || (this.scoped.response && !this.scoped.response.data)) {
            await this.categoryObj.getCategory(this.categoryId)
            this.fetchDataFromStorage()
        }
    }

    fetchDataFromStorage = () => {
        this.scoped.response = this.categoryObj.getCategoryData(this.categoryId)
        this.items = this.scoped.response.data && this.scoped.response.data.product ? this.scoped.response.data.product : []
    }
    
    fetchCategoryData = async (currentCategoryId) => {
        this.scoped.response = {}
        this.categoryId = currentCategoryId
        await this.fetchDataFromAPI()
    }
    
    componentWillMount() {
        this.fetchDataFromStorage()
        this.fetchCategoryData(this.categoryId)
    }

    componentDidUpdate(prevProps) {
        const prevCategoryId = prevProps.match.params.categoryId
        const currentCategoryId = this.props.match.params.categoryId

        if (currentCategoryId !== prevCategoryId) {
            this.scoped.response = {}
            this.fetchCategoryData(currentCategoryId)
            console.log('component did update')
        }
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <RenderCategoryItems items={this.items} />
                </div>
                <div style={{minHeight: `30vh`}}>CategoryPage {JSON.stringify(this.props.match.params.categoryId)}</div>
            </div>
        )
    }
}

export default CategoryPage
export { CategoryPage }