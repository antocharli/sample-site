import React from 'react'
import styles from './Loading.css'
import logo from '../../../assets/images/logo.svg'

function Loading() {
	return (
		<div className={styles.loading}>
			<img src={logo} alt="Loading Logo" />
		</div>
	);
}

export default Loading;
