import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../App/Routes';
import { Helmet } from 'react-helmet';
import sitemap from './sitemap';
import robots from './robots';
import manifest from './manifest';
import { useStaticRendering } from "mobx-react"

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import extractLocalesFromReq from '../client-locale/extractLocalesFromReq';
import guessLocale from '../client-locale/guessLocale';
import { LOCALE_COOKIE_NAME, COOKIE_MAX_AGE } from '../client-locale/constants';
import { ApiContent, DataLoading } from '../App/context'
import { getFromTree } from '../App/getDataFromTreeWithContext'
import { HTML } from './html'

export default ({ clientStats }) => async (req, res) => {

	// https://github.com/mobxjs/mobx-react#server-side-rendering-with-usestaticrendering
	useStaticRendering(true);

	const userLocales = extractLocalesFromReq(req);
	let lang = guessLocale(['de', 'en'], userLocales, 'en');

	if (req.originalUrl.substr(1, 2) == 'de') {
		lang = 'de';
	}

	if (req.originalUrl.substr(1, 2) == 'en') {
		lang = 'en';
	}

	const context = {};
	const contextObj = new DataLoading()

	const getHTMLString = (contextParam) => {
		return renderToString(
			<ApiContent.Provider value={contextParam}>
				<StaticRouter location={req.originalUrl} context={context}>
					<Routes lang={lang} />
				</StaticRouter>
			</ApiContent.Provider>
		)
	}
	
	getHTMLString(contextObj)

	const tree = getFromTree(contextObj)
	const data = await tree.getDataFromTree(contextObj)
	contextObj.data = data;
	console.log('data -->', data)

	const app = getHTMLString(contextObj)

	const helmet = Helmet.renderStatic();

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const status = context.status || 200;

	if (context.status == 404) {
		console.log('Error 404: ', req.originalUrl);
	}

	if (req.url == '/sitemap.xml') {
		return res
			.header('Content-Type', 'application/xml')
			.status(status)
			.send(sitemap);
	}

	if (req.url == '/robots.txt' || req.url == '/Robots.txt') {
		return res
			.header('Content-Type', 'text/plain')
			.status(status)
			.send(robots);
	}

	if (req.url == '/manifest.json' || req.url == '/Manifest.json') {
		return res
			.header('Content-Type', 'application/manifest+json')
			.status(status)
			.send(manifest);
	}

	if (context.url) {
		const redirectStatus = context.status || 302;
		res.redirect(redirectStatus, context.url);
		return;
	}

	res
		.status(status)
		.cookie(LOCALE_COOKIE_NAME, lang, { maxAge: COOKIE_MAX_AGE, httpOnly: false })
		.send(HTML({lang, styles, helmet, app, js, cssHash, data}))
};
