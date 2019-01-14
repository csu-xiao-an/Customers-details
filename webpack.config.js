const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const alias = {
  'project-components': path.resolve('./components-lib'),
  'project-services': path.resolve('./services')
}
module.exports = env => {
  let outputJSCK = '[id].bundle.js'
  let outputCSS = 'main.bundle.css'
  let outputJS = 'main.bundle.js'
  let devtool = 'source-map'
  let baseChunksPath = '/dist/'
  let baseBuildPath = './dist'
  if (env === 'production-p') {
    outputJSCK = '[id].bundle.min.js'
    outputCSS = 'main.bundle.min.css'
    outputJS = 'main.bundle.min.js'
    devtool = false
  }
  if (env === 'build-public') {
    outputJSCK = '[id].bundle.min.js'
    outputCSS = 'main.bundle.min.css'
    outputJS = 'main.bundle.min.js'
    devtool = false
    baseChunksPath = '/public/clients-details/js/'
    baseBuildPath = './public/clients-details/js'
  }
  return ({
    entry: './app/main.js',
    output: {
      path: path.resolve(__dirname, baseBuildPath),
      publicPath: baseChunksPath,
      chunkFilename: outputJSCK,
      filename: outputJS
    },
    devtool: devtool,
    optimization: {
      minimizer: [new TerserPlugin({
        test: /\.(js|jsx?)$/,
      })],
      // splitChunks: {
      //   cacheGroups: {
      //     styles: {
      //       name: outputCSS,
      //       test: /\.(styl|css)$/,
      //       chunks: 'all',
      //       enforce: true
      //     }
      //   }
      // }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx?)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['env', {'modules': false}], 'stage-0', 'react']
              }
            }
          ]
        },
        {
          test: /\.(styl|css)$/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.(img|png|svg)$/,
          use: 'url-loader'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      stats: {
        version: false,
        modules: false,
        assets: false,
        hash: false
      },
      port: '3000'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: outputCSS
      })
    ],
    resolve: {
      alias: alias
    }
  })
}
