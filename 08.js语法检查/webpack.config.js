const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build.js')
    },
    module: {
        //  cnpm install -D eslint-loader  eslint
        // cnpm install eslint-config-airbnb-base  eslint-plugin-import -D 
        // package.json  
        /*
            "eslintConfig": {
                "extends": "airbnb-base"
            }
        */
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    //自动修复eslint 
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    mode: 'development'
}