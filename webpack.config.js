const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: path.join(`${__dirname}/public`),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
      	test: /.(jpg|jpeg|png|svg|gif)$/,
      	loaders: [ "file-loader"]
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./server/template.html",
			filename: "index.html"
		})
	]
}