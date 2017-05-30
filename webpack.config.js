const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public/assets/',
        filename: 'index.js'
    },
    devServer: {
        contentBase: './public/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}

module.exports = config