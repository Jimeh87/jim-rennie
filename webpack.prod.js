const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.config');

module.exports = merge(config, {
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new CleanWebpackPlugin(['dist'])
    ]
});