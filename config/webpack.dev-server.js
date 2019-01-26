const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'development',
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	output: {
		filename: 'dev-server-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			// addition - add source-map support
			{ 
				enforce: "pre", 
				test: /\.js$/, 
				loader: "source-map-loader" 
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							exportOnlyLocals: true,
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
						},
					},
				],
				// use: [
				// 	'style-loader',
				// 	{
				// 	  loader: 'typings-for-css-modules-loader',
				// 	  options: {
				// 		modules: true,
				// 		namedExport: true
				// 	  }
				// 	},
				// 	{
				// 		loader: 'css-loader',
				// 		options: {
				// 			exportOnlyLocals: true,
				// 			modules: true,
				// 			localIdentName: '[name]__[local]--[hash:base64:5]',
				// 		},
				// 	},
				//   ],
			},
			{
				test: /\.(jpg|svg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[ext]',
							emitFile: false,
						},
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader',
					},
				],
			},
		],
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
	]
};
