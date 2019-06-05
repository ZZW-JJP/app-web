/*
路由对象模块
*/
import Vue from 'vue'
import  VueRouter from 'vue-router'

/*import  Msite from '../pages/Msite/Msite'
import  Order from '../pages/Order/Order'
import  Personal from '../pages/Personal/Personal'
import  Search from '../pages/Search/Search'*/

//路由组件懒加载
const  Msite = ()=>import('../pages/Msite/Msite')
const  Order = ()=>import('../pages/Order/Order')
const  Personal = ()=>import('../pages/Personal/Personal')
const  Search = ()=>import('../pages/Search/Search')

import  Login from '../pages/Login/Login'
import  Shop from '../pages/Shop/Shop'
import  shopGoods from '../pages/Shop/shopGoods/shopGoods'
import  shopInfo from '../pages/Shop/shopInfo/shopInfo'
import  shopRatings from '../pages/Shop/shopRatings/shopRatings'

Vue.use(VueRouter)
export  default  new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/personal',
            component:Personal,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:shopGoods
                },
                {
                    path:'/shop/ratings',
                    component:shopRatings
                },
                {
                    path:'/shop/info',
                    component:shopInfo
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                },
            ]
        },
    ]
})
