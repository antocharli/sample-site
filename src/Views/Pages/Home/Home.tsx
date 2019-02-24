import React from 'react'
import Head from '../../Components/Head'
// import styles from './Home'

const styles = require('./Home.css')

import { t } from '../../Components/Languages'
import { API_CONFIG, END_POINTS } from "../../../env"
import { string } from 'postcss-selector-parser';
import { StringFormatDefinition } from 'ajv';
import { Stringifier } from 'postcss';

interface HomeProps {
	match: {
		params: {
			lang: string
		}
	}
}
class Home extends React.Component <HomeProps>{
	render() {
		const { lang } = this.props.match.params

		return (
			<React.Fragment>
				<Head title="React SSR Boilerplate • Home" />
				<div className={styles.intro}>
					<h1 className={styles.title}>React Boilerplate</h1>
					<p className={styles.desc}>{t(lang, 'language.title')}</p>
				</div>
			</React.Fragment>
		)
	}
}

export default Home;
