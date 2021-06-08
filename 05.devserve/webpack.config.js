const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //打包其他资源(除了html/css/js资源以外的资源)
            {
                // 排除css/js/html/less 资源
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ],
    },
    //plugins html 压缩打包     html-webpack-plugin  默认穿件一个html 文件 引入打包输出资源(JS/CSS)
    // 运行 npx webpack serve        依赖 webpack-dev-server 
    plugins: [new HtmlWebpackPlugin(
        { //复制这个文件,
            template: './src/index.html'
        }
    )],
    mode: 'development',
    devServer: {
        // 项目构建后的路径
        contentBase: path.join(__dirname, 'build'),
        // 启动gzip 
        compress: true,
        // 端口号
        port: 9000,
        // 自动打开浏览器
        open: true
    },
}