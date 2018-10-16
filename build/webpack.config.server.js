const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge') // 能够很好的合并不同的webpack配置
const ExtractPlugin = require('extract-text-webpack-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.config.base')

let config

// 开发环境的配置
config = merge(baseConfig, {
  target: 'node',

  entry: path.join(__dirname, './../client/server-entry.js'),

  devtool: 'source-map',

  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },

  externals: Object.keys(require('../package.json').dependencies),

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) || 'development',
      'process,env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
})

module.exports = config