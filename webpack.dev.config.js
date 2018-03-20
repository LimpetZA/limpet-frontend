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
  mode: 'development',
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
    utils: ['material-ui', 'bootstrap/dist/css/bootstrap.min.css', 'mdbreact/docs/css/mdb.min.css' ]
  },

  output: {
    path: path.resolve('dev-dist'),
    filename: 'bundle_dev_[name].js'
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
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