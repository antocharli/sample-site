import 'isomorphic-fetch'
import { polyfill } from 'es6-promise';
import React from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './Home.css';
import { t } from '../../Components/Languages';

class Home extends React.Component {
	componentWillMount()
	{
		if(typeof(window) != 'object')
		{
			fetch('https://uxuidev.skavaone.com/skavastream/core/v5/wrskavastore/category/top?subcategory=true&t=124&partnerId=68&campaignId=2691&storeId=77&appid=skavastore&locale=en_US')
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				console.log(JSON.stringify(myJson));
			});
		}
	}
	render(){
		const { lang } = this.props.match.params;
		return(
			<div>
				<Head title="React SSR Boilerplate • Home" />
				<div className={styles.intro}>
					<h1 className={styles.title}>React Boilerplate</h1>
					<p className={styles.desc}>{t(lang, 'language.title')}</p>
				</div>
			</div>
		)
	}
}

export default Home;
