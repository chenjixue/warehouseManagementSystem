const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: path.resolve(__dirname, '../src/main.tsx'),
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.s[ac]ss$/,
            //     use: ['style-loader', {
            //         loader: 'css-loader', options: {
            //             modules: true,
            //         }
            //     }, 'sass-loader'],
            //     exclude: /node_modules/
            // },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader',  {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true,
                                camelCase: true,
                                minimize: true,
                                localIdentName: "[local]_[hash:base64:5]"
                            }
                        },'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // port: 9111,
        hot: true,
    },
};