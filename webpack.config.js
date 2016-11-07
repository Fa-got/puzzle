'use strict';
var webpack = require('webpack');

module.exports = {
	entry: "./source/js/modules/main",
  // entry: ["webpack/hot/dev-server", "./source/js/modules/main"],
	 devtool: "source-map",
	output: {
		path: __dirname + '/source/js/',
    publicPath: '/source/js/',
		filename: 'main.js'
	},
  plugins: [
   new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      minimize: true
    }) 
  ]
}