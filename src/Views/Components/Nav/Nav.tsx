import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import * as styles from './Nav.css'
const styles = require('./Nav.css')
import { MenuContainer } from './Container'
import { ApiContent } from '../../../App/context'
import { RenderMenu } from './RenderProps'
interface ResponseTypes {
	data?: object
}

class Nav extends React.Component {
	static contextType = ApiContent

	catalogObj = new MenuContainer(this.context)
	response: ResponseTypes

	componentWillMount() {
		this.response = this.catalogObj.getMenuData()
	}

	render() {
		const response = this.response ? this.response : ''
		return (
			<nav className={styles.mainNavbar}>
				<ul className={styles.mainMenu}>
					<div className={`${styles.menuBarWrapper} container`}>
						<RenderMenu data={response} />
					</div>
				</ul>
			</nav>
		)
	}
}

export default Nav
export { Nav }
