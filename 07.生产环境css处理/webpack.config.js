const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//  process.env.NODE_ENV = 'development'   开发环境切换测试  css 兼容性
process.env.NODE_ENV = 'development'
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            // cnpm install postcss-loader postcss-preset-env -D  
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // css 兼容性处理
                    /*  package.json  添加  .browserlistrc
                    "browserslist": {
                        "development": [
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                        ],
                        "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                        ]
                    }
                    */
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env"
                                    ],
                                ],
                            }
                        }
                    }
                ],
            },




            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 10 * 1024,
            //         name: '[hash:10].[ext]',
            //         //关闭es6模块
            //         esModule: false,
            //         outputpath: 'imgs'
            //     }
            // },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader'
            // },
            // {
            //     // 处理其他资源,
            //     exclude: /\.(html|css|js|less|jpg|png|gif)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[hash:10].[ext]',
            //         // 输出文件目录设置
            //         outputpath: 'utils'
            //     }
            // }
        ]
    },
    plugins: [
        //复制这个文件,
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        // 打包指定目录
        new MiniCssExtractPlugin({ filename: 'css/main.css' }),
        //css 压缩
        new OptimizeCssAssetsPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        open: true
    },
    mode: 'development',

}