const { resolve } = require('path')
module.exports = {
    //  入口
    entry: "./src/index.js",
    //  输出
    output: {
        //  输出文件名
        filename: 'build.js',
        //  输出路径
        path: resolve(__dirname, 'build')
    },
    // loader   的设置
    module: {
        rules: [
            // 详细loader设置   '不同文件必须配置不同的loader'
            {
                //匹配那些文件     
                test: /\.css$/,
                // 处理css  使用那些loader
                use: [  // 倒序执行
                    // 创建style 标签,将JS中的样式资源插入进行,添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs 模块加载js中,里面的内容是样式 `字符串`
                    'css-loader'
                ]
            },
            {
                //匹配那些文件
                test: /\.less$/,
                // 处理css  使用那些loader
                use: [  // 倒序执行
                    // 创建style 标签,将JS中的样式资源插入进行,添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs 模块加载js中,里面的内容是样式 `字符串`
                    'css-loader',
                    //将less 文件编译成css 文件   less-loade less 
                    'less-loader',
                ]
            },
        ]
    },
    //glugins 
    plugins: [

    ],
    // 模式  开发模式
    mode: 'development'


};