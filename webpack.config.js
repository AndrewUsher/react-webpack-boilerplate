const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Stylish = require('webpack-stylish')
const prod = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/index.js',
  stats: 'errors-only',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devtool: prod ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: './docs',
    compress: true,
    hot: true,
    port: 3000,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new Stylish()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
}

if (prod) {
  config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config

const newConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform all .js/.jsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false
              // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
              // Try enabling it in your environment by switching the config to:
              // enabled: true,
              // progressive: true,
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  }
}
