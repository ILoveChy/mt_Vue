import axios from 'axios'
//基础API路径
axios.defaults.baseURL = 'http://api.duyiedu.com';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params={
        ...config.params,
        appkey:'ls526995681_1547731375439'
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios;