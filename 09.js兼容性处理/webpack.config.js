const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build.js')
    },
    module: {
        /*
        cnpm install -D babel-loader @babel/core

        1.只能转换基础语法
             @babel/preset-env
        2.全部兼容
            cnpm install --save @babel/polyfill 
            入口文件使用 导入所有兼容性问题  (我只要解决部分问题--体积太大了)
            import '@babel/polyfill'
        3.需要做兼容性处理的 按需加载  
            cnpm install core-js -D

        */
        rules: [
            // 版本 3
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                //按需加载
                                useBuiltIns: 'usage',
                                //指定版本
                                corejs: { version: 3 },
                                // 那些浏览器的版本兼容性
                                targets: { chrome: '60', firefox: '60', ie: '9', safari: '10', edge: '17' }
                            }
                        ]
                    ]
                }
            },

            //版本  2
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]




    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    mode: 'development'
}