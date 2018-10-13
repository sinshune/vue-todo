const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge') // 能够很好的合并不同的webpack配置
const baseConfig = require('./webpack.config.base')

let config
const devServer = {
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

// 开发环境的配置
config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),

  devtool: '#cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },

  devServer,

  resolve: {
    alias: {
      'vue': path.join(__dirname, './../node_modules/vue/dist/vue.esm.js')
    }
  },

  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config