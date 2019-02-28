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
		<nav class="main-navbar">
			<div class="container"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
					<li><a href="#" role="menuitem" tabindex="-1">Home</a></li>
					<li><a href="#" role="menuitem" tabindex="-1">Women</a></li>
					<li><a href="#" role="menuitem" tabindex="-1">Men</a></li>
					<li><a href="#" role="menuitem" tabindex="-1">Jewelry
						<span class="new">New</span>
					</a></li>
					<li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{outline: 'none'}}><a href="#" tabindex="-1">Shoes</a>
						<span class="slicknav_arrow"><i class="flaticon-right-arrow"></i></span></a><ul class="sub-menu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
							<li><a href="#" role="menuitem" tabindex="-1">Sneakers</a></li>
							<li><a href="#" role="menuitem" tabindex="-1">Sandals</a></li>
							<li><a href="#" role="menuitem" tabindex="-1">Formal Shoes</a></li>
							<li><a href="#" role="menuitem" tabindex="-1">Boots</a></li>
							<li><a href="#" role="menuitem" tabindex="-1">Flip Flops</a></li>
						</ul>
					</li>
					<li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style={{outline: 'none'}}><a href="#" tabindex="-1">Pages</a>
						<span class="slicknav_arrow"><i class="flaticon-right-arrow"></i></span></a><ul class="sub-menu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
							<li><a href="./product.html" role="menuitem" tabindex="-1">Product Page</a></li>
							<li><a href="./category.html" role="menuitem" tabindex="-1">Category Page</a></li>
							<li><a href="./cart.html" role="menuitem" tabindex="-1">Cart Page</a></li>
							<li><a href="./checkout.html" role="menuitem" tabindex="-1">Checkout Page</a></li>
							<li><a href="./contact.html" role="menuitem" tabindex="-1">Contact Page</a></li>
						</ul>
					</li>
					<li><a href="#" role="menuitem" tabindex="-1">Blog</a></li>
				</ul></div>
				<ul class="main-menu">
					<li><a href="#">Home</a></li>
					<li><a href="#">Women</a></li>
					<li><a href="#">Men</a></li>
					<li><a href="#">Jewelry
						<span class="new">New</span>
					</a></li>
					<li><a href="#">Shoes</a>
						<ul class="sub-menu">
							<li><a href="#">Sneakers</a></li>
							<li><a href="#">Sandals</a></li>
							<li><a href="#">Formal Shoes</a></li>
							<li><a href="#">Boots</a></li>
							<li><a href="#">Flip Flops</a></li>
						</ul>
					</li>
					<li><a href="#">Pages</a>
						<ul class="sub-menu">
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
