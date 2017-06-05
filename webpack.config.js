const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const statConf = {
    assets: false,
    chunks: false,
    hash: false,
    version: false,
    errors: true,
    errorDetails: true,
    warnings: true
}

module.exports = {
    entry: './app/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx?)$/,
                exclude: [/node_modules/],
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015','react']
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
            },
            {
                test: /\.(img|png)$/,
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        stats: statConf,
        port: '3000'
    },
    plugins:[
        new ExtractTextPlugin('./dist/bundle.css')
    ]
}
