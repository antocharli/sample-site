import 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
import React from 'react'
import Head from '../../Components/Head'
import Content from '../../Components/Content'
// import styles from './Home.css'
const styles = require('../../Components/Content')

import { t } from '../../Components/Languages'
import { API_CONFIG, END_POINTS } from "../../../env"

const getTopMenu = () => {

	// if(typeof(window) != 'object')
	// {
	// 	const url = `${API_CONFIG.apiDomain}${END_POINTS.CATALOG_API.top}?subcategory=true&t=124&partnerId=68&campaignId=2691&storeId=77&appid=skavastore&locale=en_US`
	// 	fetch(url)
	// 	.then(function(response) {
	// 		return response.json()
	// 	})
	// 	.then(function(myJson) {
	// 		return myJson
	// 	})
	// }

}

class Home extends React.Component {
	menuContent = {}

	constructor(props) {
		super(props)
		const _self = this
		getTopMenu()
	}
	componentDidMount()
	{
		console.log('menu ', this.menuContent)
	}
	render(){
		// const { lang } = this.props.match.params
		const lang = 'en_us' // this.props.match.params
		return(
			<div>
				<Head title='React SSR Boilerplate • Home' description='' image= '' children=''/>
				<div className={styles.intro}>
					<h1 className={styles.title}>React Boilerplate</h1>
					<p className={styles.desc}>{t(lang, 'language.title')}</p>
				</div>
			</div>
		)
	}
}

export default Home
