import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import * as styles from './Nav.css'
const styles = require('./Nav.css')
import { MenuContainer } from './Container'
import { ApiContent } from '../../../App/context'
const logo = require('../../../assets/images/logo.svg')
import { pageNames } from '../../../App/pathParams'

interface ResponseTypes {
	data?: object
}

const RenderMenu = (category, index) => {
	return (
		<li key={index}>
			<NavLink to={`${pageNames.about}`} activeClassName={styles.active}>
				{category.name}
			</NavLink>
		</li>
	)
}

// @todo render menu
const GetMenu = (props) => {
	if(props && props.response ) {
		const { categories } = props.response.children
		return categories.map((category, index) => {
			return RenderMenu(category, index)
		})
	}
	return <React.Fragment/>
}

const RenderNav = () => {
	return (
		<nav className={styles.mainNavbar}>
			<div className="container">
				<ul className={styles.mainMenu}>
					<li><a href="#">Home</a></li>
					<li><a href="#">Women</a></li>
					<li><a href="#">Men</a></li>
					<li><a href="#">Jewelry</a></li>
					<li><a href="#">Shoes</a>
						<ul className={styles.subMenu}>
							<li><a href="#">Sneakers</a></li>
							<li><a href="#">Sandals</a></li>
							<li><a href="#">Formal Shoes</a></li>
							<li><a href="#">Boots</a></li>
							<li><a href="#">Flip Flops</a></li>
						</ul>
					</li>
					<li><a href="#">Pages</a>
						<ul className={styles.subMenu}>
							<li><a href="./product.html">Product Page</a></li>
							<li><a href="./category.html">Category Page</a></li>
							<li><a href="./cart.html">Cart Page</a></li>
							<li><a href="./checkout.html">Checkout Page</a></li>
							<li><a href="./contact.html">Contact Page</a></li>
						</ul>
					</li>
					<li><a href="#">Blog</a></li>
				</ul>
			</div>
		</nav>
	)
}

class Nav extends React.Component {
	static contextType = ApiContent

	catalogObj = new MenuContainer(this.context)
	response: ResponseTypes

	componentWillMount() {
		// this.response = this.catalogObj.getMenuData()
		this.response = {}
	}

	render() {
		const response = this.response.data ? this.response.data : ''
		return (
			<RenderNav />
		)
	}
}

export default Nav
export { Nav }
