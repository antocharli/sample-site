import * as React from 'react';
import { Helmet } from 'react-helmet';

const isProd = process.env.NODE_ENV === 'production';

class Head extends React.Component {
	static defaultProps = {
		title: 'Divisma!!',
		description: '⚛ A minimal React boilerplate with support for code splitting, hot module reload and server side rendering.',
		image: 'https://i.imgur.com/lvzUVyf.jpg',
	}
	render() {
		return(
			<Helmet encodeSpecialCharacters={true}>
				<meta http-equiv="" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={this.props.description} />
				<meta property="og:title" content={this.props.title} />
				<meta property="og:description" content={this.props.description} />
				<meta property="og:image" content={this.props.image} />
				<link
					rel="shortcut icon"
					href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
					type="image/x-icon"
				/>
				<link rel="icon" sizes="192x192" href="https://i.imgur.com/mMOR6Y7.png" />
				<link rel="apple-touch-icon-precomposed" href="https://i.imgur.com/mMOR6Y7.png" />
				<link
					rel="manifest"
					href={`${isProd ? 'https://production/' : 'http://localhost:8080/'}manifest.json`}
				/>
				{this.props.children && this.props.children}
				<title>{this.props.title}</title>
			</Helmet>
		)	
	}
}

export default Head