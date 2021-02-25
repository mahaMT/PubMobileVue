
// vue.config.js
const path = require("path");
// const config = require('../config')
// const autoprefixer = require("autoprefixer");
// const pxtorem = require("postcss-pxtorem");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  lintOnSave: false, // 关闭eslint代码检查
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/pub.less")] // 引入全局样式变量
    }
  },
  //chainWebpack: config => {
  //  config.resolve.alias
  //    .set("@", resolve("./src"))
  //    .set("components", resolve("./src/components"))
  //    .set("util", resolve("./src/util"))
  //    .set("img", resolve("./src/assets/img"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  // },
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.2.54:8660', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
   },
};
