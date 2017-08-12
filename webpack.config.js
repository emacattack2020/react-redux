require('babel-register');

var path = require("path");
var webpack = require("webpack");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: `${SRC_DIR}/app/indexReactRedux.js`,
    output: {
        path: `${DIST_DIR}/app`,
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                loader: "babel-loader?cacheDirectory",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        alias: {
                            '../fonts/bootstrap': 'bootstrap-sass/assets/fonts/bootstrap'
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")]
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: ["node_modules"]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            preserveComments: "license"
        })
    ]
};

module.exports = config;