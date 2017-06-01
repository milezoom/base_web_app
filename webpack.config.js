const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        'index': './app.js'
    },
    output: {
        publicPath: path.resolve(__dirname, 'public/assets'),
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                modules: false
                            }]
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, '/public/'),
        compress: true,
        port: 4000
    },
}

module.exports = config