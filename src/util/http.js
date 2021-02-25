import axios from 'axios'
import qs from 'querystring'
import { Toast } from "vant";

function loading() {
    Toast.clear();
    Toast.loading({
        message: '加载中...',
        forbidClick: true,  //forbidClick是否禁止背景点击
        // 自定义加载图标
        loadingType: 'spinner'
    });
}
//请求失败
function fail(msg) {
    Toast.clear();
    Toast.fail({
        message: msg,
        duration: 1000
    });
}
// 线上util地址
// let baseurl =Util.newDom
// const baseurl = "/api"
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = Util.newDom
// }

const instance = axios.create({
    // baseURL : '/api',
    timeout: 30000,
    retry: 3,
    retryDelay: 1000
})
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

instance.interceptors.request.use(function (config) {
    // console.log(config);
    // config.headers.token = Util.getServerToken()
    // loading()
    if (config.method === 'post') {
        if (config.headers.flag == 'img') {
            config.data = config.data
            // config.headers[Content-Type] = ''
        } else {
            config.headers.post["Content-Type"] = 'application/x-www-form-urlencoded; charset=UTF-8'
            config.data = qs.stringify(config.data)
        }
    }
    return config
}),
    function (error) {
        fail("请求失败,网络异常")
        return Promise.reject(error)
    }

instance.interceptors.response.use(function (response) {
    let res = response.data
    return res
},
    function (error) {
        fail("响应失败,服务异常")
        return Promise.reject(error)
    }

)
export default {
    instance,
    // baseurl
}