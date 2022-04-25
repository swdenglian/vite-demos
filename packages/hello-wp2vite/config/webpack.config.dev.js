const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      resolve('./src/client/main.ts'),
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    ],
  },
  output: {
    publicPath: '/', // webpack inject index.html js file relative path
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    // https://github.com/jantimon/html-webpack-plugin/issues/895
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/client', 'index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
  ],
});
