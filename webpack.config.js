const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {


    entry:path.join(__dirname,'./src/main.js'),

    output : {
        path : path.join(__dirname,'/dist'),
        filename : 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules:[
            {test: /\.css$/,use: ['style-loader','css-loader']} ,
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            {test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpg)$/,use: 'url-loader?limit=7321&[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woof|woff2)$/,use:['url-loader'] },
            {test:/\.vue$/,use:'vue-loader'}




           
        
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
          "vue$": "vue/dist/vue.js"
        }
      }

  
    
}
