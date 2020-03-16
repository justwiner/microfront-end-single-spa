/* eslint-env node */
const config = require('./webpack.config.js');
const webpack = require('webpack');
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new HtmlwebpackPlugin({
    title: 'project1',
    filename:'index.html'
}));
config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}
config.mode = 'development'
config.entry = path.resolve(__dirname, 'src/localDev.js')
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'build/project1'),
}
config.externals = []

module.exports = config;
