const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    name: '[hash:10].[ext]',
                    //关闭es6模块
                    esModule: false,
                    outputpath: 'imgs'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源,
                exclude: /\.(html|css|js|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    // 输出文件目录设置
                    outputpath: 'utils'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { //复制这个文件,
                template: './src/index.html'
            }
        )
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    },
    mode: 'development',

}