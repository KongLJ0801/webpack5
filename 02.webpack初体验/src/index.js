
/*
    1.运行指令:
        开发环境: webpack ./src/index.js -o ./build/ --mode=development
           
        生产环境: webpack ./src/index.js -o ./build/ --mode=production

        webpack 会以 ./src/index.js 为入口文件开始打包,
        打包后输出到 ./build/built.js整体打包环境,是开发环境




    import './index.css';
    1.webpack 能处理js/json资源, 不能处理css/img
    2.生产环境和开发环境把ES6模块化编译成浏览器能识别的模块化
    3.生产环境比开发环境多一个压缩JS代码

*/
import data from './data.json';
console.log(data, 'data');

function add(x, y) {
    return x + y
}
console.log(add(1, 2));