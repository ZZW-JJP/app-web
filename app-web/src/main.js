/*
入口js
*/
import Vue from 'vue'
import  App from './App'
import router from './router'
import store from './store'
import  {Button} from  'mint-ui'
import './mock/mockData'
import  VueLazyLoad from 'vue-lazyload'
import  loading from './common/imgs/loading.gif'
import  './filter/index'

Vue.component(Button.name,Button)
Vue.use(VueLazyLoad,{
    loading
})
new Vue({
    el:'#app',
    render: h=>h(App),
    router,
    store
})
