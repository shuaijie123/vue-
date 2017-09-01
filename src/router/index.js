import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from "@/components/Home"
import fenlei from '@/view/Fenlei'
import gouwu from '@/view/Gouwu'
import wode from "@/view/My"
import shangcheng from "@/view/shangcheng"
import xiangqing from '@/components/Xiangqing'
import sousuo from '@/components/Sousuo'

console.log(xiangqing)
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: '平安商城',
        component: shangcheng
    }, {
        path: "/fenlei",
        name: "分类",
        component: fenlei
    }, {
        path: "/gouwu",
        name: "购物车",
        component: gouwu
    }, {
        path: "/wode",
        name: "我的",
        component: wode
    }, {
        path: "/shangcheng",
        name: "平安商城",
        component: shangcheng
    },{
        path: "/xiangqing",
        name: "详情页",
        component:xiangqing
    },{
        path:"/sousuo",
        name:"搜索页",
        component:sousuo
    }]
})