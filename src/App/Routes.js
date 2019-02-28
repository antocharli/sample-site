import React from 'react';
import universal from 'react-universal-component'
import { Route, Switch, Redirect } from 'react-router'
import Nav from '../Views/Components/Nav'
import '../assets/css/globals.css'
import Head from '../Views/Components/Head'
import Loading from '../Views/Components/Loading'
import Footer from '../Views/Components/Footer'
import HeaderTop from '../Views/Components/HeaderTop'
import { pathParams } from './pathParams'

const UniversalComponent = universal(props => import(`../Views/Pages/${props.pageName}`), {
	loading: () => <Loading/>,
	ignoreBabelRename: true,
});

const routeConfig = (data, index) => {
	return (
		<Route
			exact
			key={index}
			path={data.path}
			render={routeProps => <UniversalComponent pageName={data.pageName} loading={data.loading} {...routeProps} />}
		/>
	)
}

const getRoutes = () => {
	return pathParams.map(routeConfig)
}

export default ({ staticContext, lang }) => (
	<div>
		<Head />
		<HeaderTop />
		<Nav lang={lang} />
			<Switch>
				{ getRoutes() }
				<Route render={routeProps => <UniversalComponent pageName="NotFound" {...routeProps} />} />
			</Switch>	
		<Footer />
	</div>
);
