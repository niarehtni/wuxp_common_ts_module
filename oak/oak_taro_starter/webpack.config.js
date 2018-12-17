const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {getWebpackLibraryTargetConfig} = require("common_webpack/lib/library/webpack.library.conf");


const config = getWebpackLibraryTargetConfig({
    entry: {
        index: path.resolve('src', 'index.ts'),
    },
    production: process.env.production || false
});

config.plugins = [
    //复制
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, "./src/index.d.ts"),
            to: path.resolve(__dirname, "./lib/index.d.ts"),
        }
    ])
];

module.exports = config;