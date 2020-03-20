/* eslint-env node */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config.js')

module.exports = {
  entry: './src/config.js',
  output: {
    filename: 'config.js',
    library: 'config',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, '../build'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules'), /\.krem.css$/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('autoprefixer')
                ];
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        exclude: [/\.krem.css$/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      commonDepsOrigin: config["common-deps-origin"][process.env.NODE_ENV],
      commonDepsConf: config["common-deps-conf"][process.env.NODE_ENV]
    }),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, '../src/index.html')},
      {from: path.resolve(__dirname, '../src/styles.css')},
      {
        from: path.resolve(__dirname, '../common-deps-static'),
        to: path.resolve(__dirname, '../build/common-deps-static'),
      },
    ]),
    new CleanWebpackPlugin(['../build']),
  ],
  devtool: 'source-map',
  externals: [
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
  ],
};

