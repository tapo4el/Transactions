const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    return {
        entry: ['babel-polyfill', './frontend/js/index.jsx'],
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: { presets: ["@babel/env"] }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: argv.mode === 'development',
                            },
                        },
                        "css-loader"
                    ]
                }
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        output: {
            path: path.resolve(__dirname, "public/"),
            publicPath: "/",
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "frontend/"),
            port: 3000,
            publicPath: "http://localhost:3000/",
            hotOnly: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({filename: 'bundle.css'}),
            // new BundleAnalyzerPlugin()
        ]
    }
};
