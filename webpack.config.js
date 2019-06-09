var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x*)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(s*)css$/,
                use: [{
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [
                    'url-loader',
                    'file-loader'
                ]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};