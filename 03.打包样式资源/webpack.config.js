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
    module:{
        
    }


};