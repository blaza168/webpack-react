const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: './src/index.js',
        second: './src/second-component.js',
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: "./src/index.html",
    //         filename: "./index.html"
    //     })
    // ]
};