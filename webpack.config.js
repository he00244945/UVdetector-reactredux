var webpack = require('webpack');
var path = require('path');
module.exports = {
	devtool: 'eval',
	entry: [
		'./index.jsx'
	],
	output: {
		path: path.join(__dirname, 'assets'),
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	module:{
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel-loader'],
			exclude: /node_modules/
		}]
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	devServer: {
		contentBase: './',
		hot: true,
		inline: true,
		port: 3000
	}
}