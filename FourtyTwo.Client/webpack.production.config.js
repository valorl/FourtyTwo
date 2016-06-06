var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/index'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },

    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
      // loader: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      include: path.join(__dirname,'style')
    },
    {
      test: /\.css$/,
      loaders: ["style", "css"],
      // include: path.join(__dirname,'style')
    },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    {
      test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
      loaders: [
      'transform-loader/cacheable?brfs',
      'transform-loader/cacheable?packageify'
      ]
    }, {
      test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
      loader: 'transform-loader/cacheable?ejsify'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
