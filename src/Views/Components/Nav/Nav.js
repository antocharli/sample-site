import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.css';
import logo from '../../../assets/images/logo.svg';
import { pageNames } from '../../../App/pathParams'

function Nav({ lang }) {
	return (
		<div className={styles.navigation}>
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
	);
}

export default Nav;
