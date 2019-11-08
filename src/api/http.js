// axios封装
import axios from 'axios';
import QS from 'qs';
import { Message } from 'element-ui';
// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'https://localhost:8080';
} else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://localhost:8080';
}

// 请求超时
axios.defaults.timeout = 5000;

// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token') 
    token && (config.headers.Authorization = token);        
    return config;
}, (error) => {   
    return Promise.error(error);    
})

// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {            
        return Promise.resolve(response);        
    } else {            
        return Promise.reject(response);        
    }   
}, error => {
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
        message: msg,
        type: 'error',
        duration: 1500
    })
    return Promise.reject(error)
})
// 封装get请求
export function get(url, params = {}){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    });
}
// 封装post请求
export function post(url, params) {
    return new Promise((resolve, reject) => {
        // axios.post(url, params)
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
