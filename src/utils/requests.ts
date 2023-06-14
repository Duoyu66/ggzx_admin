//进行axios的二次封装
import axios from 'axios'
import {ElMessage} from "element-plus";

let requests = axios.create({
    baseURL:'/api',
    timeout:5000
});
requests.interceptors.request.use((config)=>{
    //config配置对象，headers属性请求头，经常给服务器携带公共参数
    //返回配置对象
    return config;
})
requests.interceptors.response.use((response)=>{
    //成功回调
    //简化数据

    return response.data;
},(error)=>{
    //定义一个变量
    //
    let message = ''
    let status = error.response.status;
    switch (status){
        case 401:
            message="TOKEN过期"
            break;
        case 403:
            message="无权访问";
                break;
        case 404:
            message="请求地址错误"
            break;
        case 500:
            message="服务器开小差了"
            break;
        default:
            message="其他"
    }
    //提示错误信息
    ElMessage({
        type:'error',
        message
    })
    return Promise.reject(error);
})
export default requests
