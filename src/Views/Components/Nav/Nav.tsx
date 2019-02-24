import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import * as styles from './Nav.css'
const styles = require('./Nav.css')
import { MenuContainer } from './Container'
import { ApiContent } from '../../../App/context'
const logo = require('../../../assets/images/logo.svg')
import { pageNames } from '../../../App/pathParams'

interface ResponseTypes {
	data?: {
		userId: string
	}
}
class Nav extends React.Component {
	static contextType = ApiContent

	catalogObj = new MenuContainer(this.context)
	response: ResponseTypes

	componentWillMount() {
		this.response = this.catalogObj.getMenuData()
	}

	// @todo render menu
	renderMenu = () => {
		
	}

	render() {
		const { userId } = this.response.data ? this.response.data : ''

		return (
			<header className={styles.navigation}>
				<Link to={`${pageNames.home}`} className={styles.logo}>
					<img src={logo} alt="Logo" />
					<span>Sample site</span>
				</Link>
				<ul className={styles.menu}>
					<li>
						<NavLink to={`${pageNames.about}`} activeClassName={styles.active}>
							About - {userId}
						</NavLink>
					</li>
					<li>
						<NavLink to={`${pageNames.article}`} activeClassName={styles.active}>
							Article
						</NavLink>
					</li>
				</ul>
			</header>
		)
	}
}

export default Nav
export { Nav }
