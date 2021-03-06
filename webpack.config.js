const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin  = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].[hash:20].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jim Rennie',
            template: './index.html',
            inject: 'body'
        }),
        new FaviconsWebpackPlugin('./src/assets/iconhost.png')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            // use the html loader
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{loader: 'html-loader'}]
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(woff2?|ttf|eot|png|jpg|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:20].[ext]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(xml)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ]
            }
        ]
    }
};