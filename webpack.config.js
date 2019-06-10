var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js(x*))$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [ '@babel/preset-env' ]
                  }
                }
              },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
                
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: './[name].[ext]'
                    } 
                }]
            },
            {
                test: /\.svg$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 10000,
                        name: './[name].[ext]'
                    } 
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
          }),
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};