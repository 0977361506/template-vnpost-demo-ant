const CracoLessPlugin = require('craco-less')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const webpack = require('webpack')
const colors = require('./src/colors.config').result

const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = isProd
  ? {
      plugins: isProd
        ? [
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new UglifyJsPlugin(),
            new CompressionPlugin(),
            new BrotliPlugin(),
          ]
        : [],
    }
  : {}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: colors,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: webpackConfig,
}
