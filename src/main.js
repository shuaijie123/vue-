
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'


//import mock from './mock/mock'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import store from "./store/Table/index.js"

import directives from './directives/index'

for (let key in directives) {
    Vue.directive(key, directives[key])
}



Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)


var instance = axios.create({
    baseURL: '', //打包上线是替换地址
    timeout: 1000,
    headers: { 'X-Custom-Header': "foobar" }
});


Vue.prototype.$axios = instance


instance.interceptors.request.use(function(config) {
    //在请求发出之前进行一些操作
    console.log("加载中")
    return config;
}, function(err) {
    //Do something with request error
    return Promise.reject(err);
});
instance.interceptors.response.use(function(res) {
    //在这里对返回的数据进行处理
    console.log("加载完成")
    return res;
}, function(err) {
    //Do something with response error
    return Promise.reject(err);
})








new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})