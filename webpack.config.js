const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const prod = process.env.NODE_ENV === 'production'

// Common Plugins
const Stylish = require('webpack-stylish')
// Base config for development and production
const baseConfig = {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new Stylish()
  ],
  output: {
    // Hash files to bust cache on change
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        // No jsx yet, can add if needed
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        // Handle Stylus files
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
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
              limit: 10 * 1024
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false
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
      }
    ]
  },
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

// Development plugins
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Development config
const devConfig = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  cache: true,
  devServer: {
    compress: true,
    contentBase: './docs',
    hot: true,
    port: 3000,
    stats: 'errors-only'
  },
  devtool: 'eval',
  plugins: baseConfig.plugins.concat([
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ])
}

// Production Plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

// Production config
const prodConfig = {
  cache: false,
  plugins: baseConfig.plugins.concat([
    // Image optimization
    new ImageminPlugin({
      // disable in production
      disable: !prod,
      pngquant: { quality: '95-100' }
    }),
    // Bundle size analyzer with cool viz
    new BundleAnalyzerPlugin(),
    // Gzip all js, css, html, sass, scss, stylus files
    new CompressionPlugin()
  ])
}

module.exports = prod ? Object.assign(baseConfig, prodConfig) : Object.assign(baseConfig, devConfig)
