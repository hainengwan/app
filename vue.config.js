// import {app} from './server/server.js'
// const app = require('./server/server.js')
const express = require('express')
const app = express()
var appData = require('./servers/rankList.json')
var seller = appData
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
module.exports = {
    baseUrl: './',
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
    lintOnSave: false,
    devServer: {
        //模拟数据开始
        before(app) {
            app.post('/api/seller', (req, res) => {
                setTimeout(() => {
                    res.json({
                        // 这里是你的json内容
                        success: true,
                        data: seller
                    })
                }, 3000);
            })
        },

        open: process.platform === 'darwin',
        // host: 'http://www.thttde.com/mpms/admin',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy:null
        // proxy: {
        //     '/apis': {    //将www.exaple.com印射为/apis
        //         target: '192.168.4.78',  // 接口域名
        //         port:8080,
        //         secure: false,  // 如果是https接口，需要配置这个参数
        //         changeOrigin: true,  //是否跨域
        //         pathRewrite: {
        //             '^/apis': ''   //需要rewrite的,
        //         }              
        //     }
        // } // 设置代理

    },
}