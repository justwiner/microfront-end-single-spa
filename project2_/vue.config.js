const webpack = require('webpack')
const path = require('path');

// module.exports = {
//     entry: path.resolve(__dirname, 'src/project2.js'),
//     output: {
//         filename: 'project2.js',
//         library: 'project2',
//         libraryTarget: 'amd',
//         path: path.resolve(__dirname, 'build/project2'),
//     },
// }

module.exports = {
    chainWebpack: config => {
        config.entryPoints.clear()
        config.entry('project2').add('./src/project2.js').end()
        config.output.filename('project2.js').library('project2').libraryTarget('amd').end()
        config.devServer.port(8237).headers({
            "Access-Control-Allow-Origin": "*",
          })
        config.module.rule('images').use('url-loader').loader('url-loader').tap(options => ({
            limit: 4096,
            fallback: {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]'
            }
            }
        }))
    },
    outputDir: path.resolve(__dirname, 'build/project2')
}