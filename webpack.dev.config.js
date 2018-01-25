const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cwd = process.cwd()

/**
 * Config
 */
module.exports = {
  context: path.join(cwd, 'app'),
  devtool: 'source-map',
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  entry: {
    app: ['./js/index.jsx'],
    react: ['react', 'react-dom', 'react-router-dom', 'react-router', 'redux', 'react-redux', 'react-router-redux', 'react-tap-event-plugin', 'history'],
    utils: ['moment', 'material-ui']
  },

  output: {
    path: path.resolve('dev-dist'),
    filename: 'bundle_dev_[name].js'
  },

  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loaders: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    new webpack.IgnorePlugin(/^(fs|ipc)$/)
  ]
}