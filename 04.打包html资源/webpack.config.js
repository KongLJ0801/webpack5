const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //打包其他资源(除了html/css/js资源以外的资源)
            {
                // 排除css/js/html/less 资源
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader'
            }
        ],
    },
    //plugins html 压缩打包     html-webpack-plugin  默认穿件一个html 文件 引入打包输出资源(JS/CSS)
    plugins: [new HtmlWebpackPlugin(
        { //复制这个文件,
            template: './src/index.html'
        }
    )],
    mode: 'development'
}