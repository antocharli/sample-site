import React from 'react'
import { NavLink } from 'react-router-dom'
import { pageNames } from '../../../App/pathParams'

const styles = require('./Nav.css')

const RenderChildMenu = (response) => {
	const { categories } = response
	if(categories) {
		return (
			<div className={styles.subMenuChildren}>
				<RenderSubMenus categories={categories} isFromChildMenu /> 
			</div>
		)
	}
	else {
		return <React.Fragment />
	}
}

const RenderSubMenus = (props) => {
	const { categories, isFromChildMenu } = props

	if(categories) {
		const subCategoryRender = categories.map((category, idx) => {
			return (
					<li key={idx}>
						<NavLink to={`${pageNames.category}/${category.identifier}`} className={!isFromChildMenu ? styles.subMenuLink : ''}>{category.name}</NavLink>
						<RenderChildMenu categories={category.subCategories} />
					</li>
				)
		})
		return <ul className={!isFromChildMenu ? styles.subMenu : ''}> { subCategoryRender } </ul>
	}
	else {
		return <React.Fragment />
	}
}

const RenderMenu = (response) => {
	if(response && !response.data.categories)
	{
		return <React.Fragment />
	}
	const categories = response.data.categories
	
	const menuRender = categories.map((category, idx) => {
		return ( 
			<li key={idx}>
				<NavLink to={`${pageNames.category}/${category.identifier}`}>{category.name}</NavLink>
				<RenderSubMenus categories={category.subCategories} />
			</li>)
	})
	
	return menuRender
}


export default RenderMenu

export {
    RenderMenu
}