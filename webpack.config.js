var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./resources/js/app.js','./resources/js/action.js'],
    output: {
        path: __dirname + '/public/js/',
        filename: 'app.js',
    },
    devServer: {
        contentBase: 'build/'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        require.resolve('babel-preset-es2015')
                    ]
                }

            }
        ]
    },
    stats: {
        colors: true
    }
};