
/*
    1.运行指令:
        开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
            webpack 会以 ./src/index.js 为入口文件开始打包,
            打包后输出到 ./build/built.js整体打包环境,是开发环境
        生产环境: 

*/


function add(x, y) {
    return x + y
}
console.log(add(1, 2));