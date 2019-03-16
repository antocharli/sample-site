import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { ApiContent } from '../../../App/context'
import ProductBlock from '../../Components/ProductBlock'
import CategoryContainer from './Container'
import { object } from 'prop-types';

const RenderCategoryItems = (response) => {
    const { items } = response
    
    if(items) {
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
    @observable items = {}

    fetchDataFromAPI = async () => {
        if (!this.response || (this.response && !this.response.data)) {
            const data = await this.categoryObj.getCategory(this.categoryId)
            console.log('api data ', data)
        }
    }

    fetchData = () => {
        this.response = this.categoryObj.getCategoryData(this.categoryId)
        this.items = this.response.data && this.response.data.product ? this.response.data.product : []
    }
    
    loadNewCategory = async (currentCategoryId) => {
        console.log('Need to fetch API and to render')
        this.response = {}
        this.categoryId = currentCategoryId
        const data = await this.fetchDataFromAPI()
        this.fetchData()
        console.log(this.response)
    }
    
    componentWillMount() {
        if (typeof window === 'undefined') {
            this.fetchDataFromAPI()
        }
        this.fetchData()
    }

    componentDidMount() {
        this.fetchDataFromAPI()
        console.log('this.items', this.items)
    }

    componentDidUpdate(prevProps) {
        const prevCategoryId = prevProps.match.params.categoryId
        const currentCategoryId = this.props.match.params.categoryId

        if (currentCategoryId !== prevCategoryId) {
            this.loadNewCategory(currentCategoryId)
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