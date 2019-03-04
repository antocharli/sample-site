import React, { useImperativeHandle } from 'react'
import Head from '../../Components/Head'
import ImageGallery from '../../Components/ImageGallery'
import ProductBlock from '../../Components/ProductBlock'

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
		// {t(lang, 'language.title')}

		return (
			<React.Fragment>
				<Head title='React SSR Boilerplate • Home' />
				<ImageGallery />
				<div className='container'>
					<ProductBlock />
				</div>
			</React.Fragment>
		)
	}
}

export default Home;
