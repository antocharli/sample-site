const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'@babel/runtime/regenerator',
			'webpack-hot-middleware/client?reload=true',
			'./src/main.js',
		],
	},
	mode: 'development',
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	output: {
		filename: '[name]-bundle.[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							experimentalWatchApi: true,
						  },
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
					// ExtractCssChunks.loader,
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						// loader: 'typings-for-css-modules',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
							importLoaders: 1,
							sourceMap: true,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
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
							name: 'images/[name].[ext]',
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true,
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};
