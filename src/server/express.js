import express from 'express';
import cookieParser from 'cookie-parser';
const server = express();
server.use(cookieParser());
import path from 'path';
const expressStaticGzip = require('express-static-gzip');
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import proxyServer from '../../proxy'
import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';
import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';

import { load3rdPartyAssets } from './load3rdPartyAssests'

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 3001;
let isBuilt = false;

server.listen(PORT, () => {
	isBuilt = true;
	console.log(
		`Server listening on \x1b[42m\x1b[1mhttp://localhost:${PORT}\x1b[0m in \x1b[41m${
			process.env.NODE_ENV
		}\x1b[0m 🌎...`
	);
});

const done = () => {
	!isBuilt && console.log('Done');
};

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	const serverCompiler = compiler.compilers[1];

	const webpackDevMiddleware = require('webpack-dev-middleware')(
		compiler,
		configDevClient.devServer
	);

	const webpackHotMiddleware = require('webpack-hot-middleware')(
		clientCompiler,
		configDevClient.devServer
	);

	load3rdPartyAssets(server)

	server.use(webpackDevMiddleware);
	server.use(webpackHotMiddleware);
	server.use(webpackHotServerMiddleware(compiler));
	console.log('Middleware enabled');

	

	// init proxy server need to make separate structure for this
	const proxyApp = express()
	proxyServer(proxyApp)

	done();
} else {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const clientStats = stats.toJson().children[0];
		const render = require('../../build/prod-server-bundle.js').default;
		console.log(
			stats.toString({
				colors: true,
			})
		);
		server.use(
			expressStaticGzip('dist', {
				enableBrotli: true,
			})
		);
		server.use(render({ clientStats }));
		done();
	});
}
