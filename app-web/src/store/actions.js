/*
通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShopList,
    reqUserInfo,
    reqLogout,
    reqShopGoods,
    reqShopInfo,
    reqShopRatings,
    reqSearchShop
} from "../api/index";

export default {
    //异步获取地址
    async getAdress({commit, state}) {
        //发送异步请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        //发送一个mutation
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    //异步获取食物分类列表
    async getCategorys({commit}) {
        //发送异步请求
        const result = await reqFoodCategorys()
        //发送一个mutation
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }

    },
    //异步获取商铺列表
    async getShops({commit, state}) {
        //发送异步请求
        const {latitude, longitude} = state
        const result = await reqShopList(latitude,longitude)
        //发送一个mutation
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },
    getUserInfo({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    async autoLogin({commit}){
        const result =await reqUserInfo()
        if(result.code===0){
            const userInfo =result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    async logout({commit}){
        const result =await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商家信息
    async getShopInfo({commit}) {
        const result = await reqShopInfo()
        if(result.code===0) {
            const info = result.data
            info.score = 3.5
            commit(RECEIVE_INFO, {info})
        }
    },
    // 异步获取商家评价列表
    async getShopRatings({commit},callback) {
        const result = await reqShopRatings()
        if(result.code===0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, {ratings})
            callback && callback()
        }
    },
    // 异步获取商家商品列表
    async getShopGoods({commit},callback) {
        const result = await reqShopGoods()
        if(result.code===0) {
            const goods = result.data
            commit(RECEIVE_GOODS, {goods})
        }
        callback && callback()
    },
    updateFoodCount({commit},{isAdd, food}){
        if (isAdd) {
            commit(INCREMENT_FOOD_COUNT, {food})
        } else {
            commit(DECREMENT_FOOD_COUNT, {food})
        }
    },
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    async searchShops({commit, state}, keyword) {

        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShop(geohash, keyword)
        if (result.code === 0) {
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS, {searchShops})
        }
    },
}

