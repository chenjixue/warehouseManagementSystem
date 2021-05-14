const path = require('path');

module.exports = {
    entry: {
        index: './src/main.js',
    },
    output: {
        filename: '[name].[hashCode].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
                exclude:/node_modules/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
};