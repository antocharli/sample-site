import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import * as styles from './Nav.css'
const styles = require('./Nav.css')
// import logo from '../../../assets/images/logo.svg'
const logo = require('../../../assets/images/logo.svg')
import { pageNames } from '../../../App/pathParams'
import { connectToTopCategory } from '../../../state/catalog'


function clean(constructor) {
	return class extends constructor {
		async componentWillMount() {
		const response = await connectToTopCategory()
		this.menu = response
		console.log('Cleaning....')
		// Auto Clean things and call the original method
		await constructor.prototype.componentWillMount.apply(this, arguments, response);
	  }
	}
  }	

// @clean
class Nav extends React.Component {
	state = {
		menu: 123
	}

	menu = {}
	async componentWillMount1 (response1) {
		console.log('response--> ', response1)
		const response = await connectToTopCategory()
		this.menu = await response
		console.log(this.menu)
		await this.getScript()
	}

	async getData () {
		const response = await connectToTopCategory()
		this.setState({menu: response})
	}
	
	getScript() {
		const stringData = JSON.stringify(this.menu)
		return (
			{__html: `<script>
				window._data = ${stringData}
			</script>`
			}
		)
	}

	// async componentDidMount() {
	// 	const response = await connectToTopCategory()
	// 	this.menuData.data = JSON.stringify(response)
	// }
	render() {
		return (
			<div className={styles.navigation}>
				{console.log(this.menu)}
				<div dangerouslySetInnerHTML={this.getScript()} />
				<Link to={`${pageNames.home}`} className={styles.logo}>
					<img src={logo} alt="Logo" />
					<span>Sample site</span>
				</Link>
				<ul className={styles.menu}>
					<li>
						<NavLink to={`${pageNames.about}`} activeClassName={styles.active}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to={`${pageNames.article}`} activeClassName={styles.active}>
							Article
						</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Nav
export { Nav }
