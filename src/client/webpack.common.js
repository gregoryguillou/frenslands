const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", "css-loader", "postcss-loader"
                ],
            },
            {
                test: /\.svg$/i,
                use: 'raw-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client'),
        // publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
    ],
    // node: { fs: 'empty' },
    // target: 'web', // Make web variables accessible to webpack, e.g. window
}