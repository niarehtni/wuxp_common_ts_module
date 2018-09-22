import * as webpack from "webpack";
import * as path from "path";
import * as os from "os";
import * as HappyPack from "happypack";
import {isExclude} from "../../utils/WebpackUtils";


const bannerPlugin = new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" }\n',
    raw: true
});

const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
HappyPack.SERIALIZABLE_OPTIONS = HappyPack.SERIALIZABLE_OPTIONS.concat([
    'postcss'
]);

const webConfig: webpack.Configuration = {

    entry: {
        app: path.resolve('src', 'Main'),
    },
    output: {
        path: path.resolve(__dirname, 'dist_web'),
        filename: '[name].web.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", "d.ts", ".js", ".css", ".vue"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: isExclude
            }, {
                test: /\.vue(\?[^?]+)?$/,
                use: []
            },
            {
                // 配置sass编译规则
                test: /\.s[a|c]ss$/,
                loader: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.less/,
                loader: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },

    plugins: [
        bannerPlugin,
        new HappyPack({
            id: 'babel',
            cache: false,
            verbose: true,
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'css',
            verbose: true,
            cache: false,
            loaders: ['postcss-loader'],
            threadPool: happyThreadPool
        })
    ]
};

const weexVuePrecompiler = require('weex-vue-precompiler')();
const postcssPluginWeex = require('postcss-plugin-weex');
const autoprefixer = require('autoprefixer');
const postcssPluginPx2Rem = require('postcss-plugin-px2rem');

(webConfig.module.rules[1].use as any).push({
    loader: 'vue-loader',
    options: {
        optimizeSSR: false,
        postcss: [
            postcssPluginWeex(),
            autoprefixer({
                browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
            }),
            postcssPluginPx2Rem({rootValue: 75, minPixelValue: 1.01})
        ],
        compilerModules: [
            {
                postTransformNode: el => {
                    weexVuePrecompiler(el);
                }
            }
        ],
        loaders: {
            js: 'happypack/loader?id=babel',
            scss: 'vue-style-loader!css-loader!sass-loader'
        }
    }
});
export default webConfig;