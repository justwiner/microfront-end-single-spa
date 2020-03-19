const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:8237' : '/project2',
    chainWebpack: config => {
        config.entryPoints.clear()
        config.entry('project2').add(process.env.VUE_APP_ENTRY).end()
        if (process.env.VUE_APP_CURRENTMODE === 'portal') {
            config.output.filename('project2.js').library('project2').libraryTarget('amd').end()
        } else {
            config.output.filename('project2.js').library('project2')
        }
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
    outputDir: path.resolve(__dirname, '../portal/build/project2')
}