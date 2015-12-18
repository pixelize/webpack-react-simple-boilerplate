
var path = require('path')
var fs = require('fs')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, '/src'),
  entry: './main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?sourceMap'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass!postcss-loader')
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  postcss: function () {
    return [
      require('lost')({
        gutter: '150px'
      }),
      require('autoprefixer')
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
