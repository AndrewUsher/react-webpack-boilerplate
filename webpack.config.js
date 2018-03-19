const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    devtool: 'inline-source-map',
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
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
